import { createContext, useContext, useEffect, useState } from 'react'

const BASE_URL = 'http://localhost:9002'

const CitiesContext = createContext()

function CitiesProvider ({ children }) {
  const [cities, setCities] = useState([])
  const [currentCity, setCurrentCity] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchCities () {
      try {
        setLoading(true)
        setError('')

        const res = await fetch(`${BASE_URL}/cities`, {
          signal: controller.signal
        })

        if (!res.ok) throw new Error('Failed to load cities')

        const data = await res.json()
        setCities(data)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchCities()

    return () => controller.abort()
  }, [])

  //Get city data...
  async function getCities (id) {
    try {
      setLoading(true)
      setError('')

      const res = await fetch(`${BASE_URL}/cities/${id}`)

      if (!res.ok) throw new Error('Failed to load cities')

      const data = await res.json()
      setCurrentCity(data)
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
        error,
        getCities,
        currentCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  )
}

function useCities () {
  const context = useContext(CitiesContext)
  if (context === undefined)
    throw new Error('CitiesContext was used outside the CitiesProvider')
  return context
}

export { CitiesProvider, useCities }
