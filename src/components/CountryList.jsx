import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import { useCities } from "../context/CitiesContext";

export default function CountryList() {
  const { cities, isLoading, error } = useCities();

  if (isLoading) return <Spinner />;
  if (error) return <Message message={error} />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const uniqueCountries = [];
  const seen = new Set();
  cities.forEach((city) => {
    if (!seen.has(city.country)) {
      seen.add(city.country);
      uniqueCountries.push(city);
    }
  });
  return (
    <ul className={styles.countryList}>
      {uniqueCountries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}
