import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.6)",
    padding: "10px 15px",
    borderRadius: "25px",
    margin: "20px auto",
    width: "fit-content",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(8px)",
  },
  input: {
    padding: "10px 15px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "20px",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
    fontSize: "14px",
    marginRight: "10px",
    width: "400px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default SearchBar;
