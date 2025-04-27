import { useState, useEffect } from 'react'; // Import React hooks
import reactLogo from './assets/react.svg'; // Import React logo
import viteLogo from '/vite.svg'; // Import Vite logo
import './App.css'; // Import CSS for styling
import Gallery from './components/Gallery'; // Import the Gallery component

function App() {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to manage the loading status
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);

  // useEffect to fetch tours data when the component mounts
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        // Fetch data from the API
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours'); // Throw error if response is not OK
        }
        const data = await response.json(); // Parse JSON data
        setTours(data); // Update tours state with fetched data
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchTours(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on mount

  // If loading is true, display "Loading..."
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // If error, display an error message
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  // Else, render Gallery with tour data
  return (
    <>
      {/* Header section with Vite and React logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Render the Gallery component */}
      <div className="card">
        <h2>Tours</h2>
        <Gallery
          tours={tours} // Pass the tours array
          onRemove={(id) => setTours(tours.filter((tour) => tour.id !== id))} // Remove tour from state
        />
      </div>

      {/* Footer section with a note */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App; // Export the App component
