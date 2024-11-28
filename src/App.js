import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";
import { fetchForecast } from "./services/weatherService";
import "./App.css";

const App = () => {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      const data = await fetchForecast(city);
      setForecastData(data);
      setError("");
    } catch (err) {
      setError("No information found for your city");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={styles.error}>{error}</p>}
      {forecastData && (
        <>
          <Forecast forecast={forecastData.list} />
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  header: {
    color: "#1a3298",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  error: {
    color: "#d8624d",
    fontWeight: "bold",
    margin: "10px 0",
  },
};

export default App;
