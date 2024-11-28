import React from 'react';

const ForecastDisplay = ({ forecast }) => {
    if (!forecast) return null;

    const groupedByDay = forecast.reduce((acc, item) => {
        const date = item.dt_txt.split(' ')[0];
        if (!acc[date]) acc[date] = [];
        acc[date].push(item);
        return acc;
    }, {});

    const dailyForecasts = Object.entries(groupedByDay).map(([date, entries]) => {
        const tempMins = entries.map((entry) => entry.main.temp_min);
        const tempMaxs = entries.map((entry) => entry.main.temp_max);

        return {
            date,
            temp: entries[0].main.temp.toFixed(1),
            temp_min: Math.min(...tempMins).toFixed(1),
            temp_max: Math.max(...tempMaxs).toFixed(1),
            humidity: entries[0].main.humidity,
            pressure: entries[0].main.pressure,
            wind: entries[0].wind.speed,
            description: entries[0].weather[0].description,
            icon: entries[0].weather[0].icon,
        };
    });

    return (
        <div style={styles.container}>
            {dailyForecasts.map((day) => (
                <div key={day.date} style={styles.card}>
                    <h3>{new Date(day.date).toDateString()}</h3>
                    <img
                        src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                        alt={day.description}
                        style={styles.icon}
                    />
                    <p style={{ color: "#ffa500" }}><i>{day.description}</i></p>
                    <h4>Temp: {day.temp}°C</h4>
                    <p style={{ color: "#ff0000" }}>Max Temp: {day.temp_max}°C</p>
                    <p style={{ color: "#0000ff" }}>Min Temp: {day.temp_min}°C</p>
                    <p>Humidity: {day.humidity}%</p>
                    <p>Wind: {day.wind} m/s</p>
                    <p>Pressure: {day.pressure} hPa</p>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '25px',
        marginTop: '20px',
    },
    card: {
        background: 'linear-gradient(to bottom, #ffefba, #ffffff)',
        border: '1px solid #ddd',
        borderRadius: '15px',
        padding: '20px',
        textAlign: 'center',
        width: '220px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    icon: {
        width: '100px',
    },
};

export default ForecastDisplay;
