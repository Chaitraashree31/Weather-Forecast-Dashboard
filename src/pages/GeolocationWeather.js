import React, { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import { fetchWeatherByCoords, fetchForecastByCoords } from "../services/WeatherService";

const GeolocationWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async (lat, lon) => {
    try {
      setLoading(true);
      const [weatherData, forecastData] = await Promise.all([
        fetchWeatherByCoords(lat, lon),
        fetchForecastByCoords(lat, lon),
      ]);
      if (!weatherData || !forecastData.length) {
        setError("Unable to fetch weather data.");
      } else {
        setWeather(weatherData);
        setForecast(forecastData);
      }
    } catch {
      setError("Failed to load weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => fetchData(coords.latitude, coords.longitude),
      () => {
        setError("Permission denied or failed to get location.");
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="cards-wrapper">
      {loading && <div className="loading-spinner"></div>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && (
        <>
          {weather && <WeatherCard weather={weather} />}
          {forecast.length > 0 && <ForecastCard forecast={forecast} />}
        </>
      )}
    </div>
  );
};

export default GeolocationWeather;
