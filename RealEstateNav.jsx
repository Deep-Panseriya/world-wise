import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Navigation Component



function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 SINGLE SOURCE OF TRUTH
  const presaleCategories = [
    {
      title: "Presale Condos",
      items: [
        { name: "Surrey Condos", path: "/surrey-condos" },
        { name: "Vancouver Condos", path: "/vancouver-condos" },
        { name: "Langley Condos", path: "/langley-condos" },
        { name: "Coquitlam Condos", path: "/coquitlam-condos" },
        { name: "Burnaby Condos", path: "/burnaby-condos" },
        { name: "Richmond Condos", path: "/richmond-condos" },
      ],
    },
    {
      title: "Presale Townhomes",
      items: [
        { name: "Surrey Townhomes", path: "/surrey-townhomes" },
        { name: "Langley Townhomes", path: "/langley-townhomes" },
        { name: "Coquitlam Townhomes", path: "/coquitlam-townhomes" },
        { name: "Burnaby Townhomes", path: "/burnaby-townhomes" },
      ],
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-bold text-yellow-500">
                presale.
              </span>
              <span className="text-[10px] tracking-widest text-gray-500">
                PROPERTIES
              </span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-6 text-sm">

              {/* Presale Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  className="bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-md font-medium flex items-center gap-2"
                >
                  Presale
                  <svg
                    className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mega Menu */}
                {isOpen && (
                  <div className="absolute left-0 mt-3 w-[760px] bg-white rounded-lg shadow-xl border p-6">

                    {/* All Projects */}
                    <Link
                      to="/all-projects"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 pb-6 mb-6 border-b hover:text-yellow-600"
                    >
                      <span className="text-xl">📁</span>
                      <div>
                        <div className="font-semibold">All Projects</div>
                        <div className="text-xs text-gray-500">
                          Browse all presale developments
                        </div>
                      </div>
                    </Link>

                    {/* Dynamic Columns */}
                    <div className="grid grid-cols-2 gap-8">
                      {presaleCategories.map((category) => (
                        <div key={category.title}>
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                            {category.title}
                          </h3>

                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.path}>
                                <Link
                                  to={item.path}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-2 text-gray-700 hover:text-yellow-600"
                                >
                                  <span className="text-gray-400">📍</span>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Search */}
                    <div className="mt-6 pt-6 border-t">
                      <input
                        type="text"
                        placeholder="Search projects, developers..."
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Static Links */}
              <Link to="/move-in-ready" className="hover:text-gray-900">
                Move-In Ready
              </Link>
              <Link to="/blog" className="hover:text-gray-900">
                Blog
              </Link>
              <Link to="/calculator" className="hover:text-gray-900">
                Calculator
              </Link>

              <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-medium flex items-center gap-2">
                📞 Request a Call Back
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Home Page
function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[500px] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">
            FIND YOUR PERFECT <span className="text-yellow-400">PRESALE</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover exclusive presale condos and townhomes in Vancouver&apos; most desirable locations
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">TOP CITIES</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Vancouver', 'Surrey', 'Langley', 'Coquitlam', 'Abbotsford'].map((city) => (
            <button
              key={city}
              className="px-8 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-full font-medium transition-colors"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// All Projects Page
function VancouverCondos() {
  return <h2 className="text-red-500">Hello vancouver</h2>
}
// Surrey Condos Page


// Move In Ready Page


// Generic Page


// Main App
export default function App() {
  const routes = [
    { path: "/vancouver-condos", element: <VancouverCondos /> },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}