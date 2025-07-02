import React from "react";
import { formatDate, getDayName } from "../utils/DateUtils";

const ForecastCard = ({ forecast }) => (
  <div className="forecast-container">
    {forecast.map((day, index) => {
      const icon = day.weather[0].icon;
      return (
        <div className="forecast-card" key={index}>
          <h3>{getDayName(day.dt)}</h3>
          <p className="forecast-date">{formatDate(day.dt)}</p>
          <p className="desc">{day.weather[0].description}</p>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={day.weather[0].description}
          />
          <div className="forecast-temp">{Math.round(day.main.temp)}°C</div>
        </div>
      );
    })}
  </div>
);

export default ForecastCard;
