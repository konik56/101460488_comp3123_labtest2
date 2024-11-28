import React from "react";

const WeatherCard = ({ day }) => {
  const {
    date,
    icon,
    description,
    temp,
    temp_max,
    temp_min,
    humidity,
    wind,
    pressure,
  } = day;

  const ICON_URL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div key={date} style={styles.card}>
      <h3 style={styles.text}>{new Date(date).toDateString()}</h3>
      <img
        src={ICON_URL}
        alt={description}
        style={styles.icon}
      />
      <p style={{ ...styles.text, color: "#ffa500" }}>
        Desc: {description}
      </p>
      <p style={{ ...styles.text, color: "#02f000" }}>Current Temp: {temp}°C</p>
      <p style={{ ...styles.text, color: "#f74d3d" }}>Top Temp: {temp_max}°C</p>
      <p style={{ ...styles.text, color: "#4a84ff" }}>Min Temp: {temp_min}°C</p>

      <p style={styles.text}>Pressure: {pressure} hPa</p>
      <p style={styles.text}>Humidity: {humidity}%</p>
      <p style={styles.text}>Wind Speed: {wind} m/s</p>
    </div>
  );
};

const styles = {
  card: {
    background: "rgba(0, 0, 0, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    width: "220px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  icon: {
    width: "100px",
  },
  text: {
    color: "#ffffff",
    margin: "5px 0",
  },
};

export default WeatherCard;
