import React from "react";
import WeatherCard from "./WeatherCard";

const Forecast = (props) => {
  const { forecast } = props;
  if (!forecast) {
    return null;
  }

  const weatherByDay = Object.entries(
    forecast.reduce((acc, item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!acc[date]) acc[date] = [];
      acc[date].push(item);
      return acc;
    }, {})
  ).map(([date, entries]) => {
    const tempMins = entries.map((entry) => entry.main.temp_min);
    const tempMaxs = entries.map((entry) => entry.main.temp_max);

    return {
      date,
      temp_min: Math.min(...tempMins).toFixed(1),
      temp: entries[0].main.temp.toFixed(1),
      temp_max: Math.max(...tempMaxs).toFixed(1),
      pressure: entries[0].main.pressure,
      humidity: entries[0].main.humidity,
      description: entries[0].weather[0].description,
      wind: entries[0].wind.speed,
      icon: entries[0].weather[0].icon,
    };
  });

  return (
    <div style={styles.container}>
      {weatherByDay.map((day) => (
        <WeatherCard day={day} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
    marginTop: "20px",
  },
  card: {
    background: "linear-gradient(to bottom, #ffefba, #ffffff)",
    border: "1px solid #ddd",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    width: "220px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  icon: {
    width: "100px",
  },
};

export default Forecast;
