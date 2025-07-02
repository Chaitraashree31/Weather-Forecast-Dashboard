import React from "react";
import { formatDate, getDayName } from "../utils/DateUtils";

const WeatherCard = ({ weather }) => {
  const { name, sys, weather: weatherDetails, main, wind, dt } = weather || {};
  const description = weatherDetails?.[0]?.description || "";
  const icon = weatherDetails?.[0]?.icon;

  return (
    <div className="weather-card">
      <h2>{name}, {sys?.country}</h2>
      <div className="date-block">
        <p>{getDayName(dt)}</p>
        <p>{formatDate(dt)}</p>
      </div>
      <h3 className="desc">{description}</h3>
      {icon && (
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      )}
      <div className="temp">{Math.round(main?.temp)}°C</div>
      <p className="updated-time">Last updated: {new Date().toLocaleTimeString()}</p>
      <div className="stats-container-horizontal">
        <div className="stat-item-vertical">
          <span>Humidity</span>
          <img src="https://openweathermap.org/img/wn/09d@2x.png" alt="humidity" className="metric-icon" />
          <span>{main?.humidity}%</span>
        </div>
        <div className="stat-item-vertical">
          <span>Pressure</span>
          <img src="https://openweathermap.org/img/wn/50d@2x.png" alt="pressure" className="metric-icon" />
          <span>{main?.pressure} hPa</span>
        </div>
        <div className="stat-item-vertical">
          <span>Wind Speed</span>
          <img src="https://openweathermap.org/img/wn/13d@2x.png" alt="wind" className="metric-icon" />
          <span>{wind?.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
