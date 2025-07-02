import React, { useState, useEffect, useCallback } from "react";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import { fetchWeatherByCity, fetchForecastByCity } from "../services/WeatherService";

const SearchWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = useCallback(async () => {
    const trimmedCity = city.trim();
    setWeather(null);
    setForecast([]);
    setError("");

    if (!trimmedCity.match(/^[a-zA-Z\s]+$/)) {
      setError("Please enter a valid city name.");
      return;
    }

    try {
      setLoading(true);
      const [weatherData, forecastData] = await Promise.all([
        fetchWeatherByCity(trimmedCity),
        fetchForecastByCity(trimmedCity)
      ]);
      if (!weatherData || weatherData.cod === "404") {
        setError("City not found.");
        return;
      }
      setWeather(weatherData);
      setForecast(forecastData);
    } catch {
      setError("Error fetching weather data.");
    } finally {
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (city) fetchWeatherData();
    }, 800);
    return () => clearTimeout(timeout);
  }, [city, fetchWeatherData]);

  return (
    <div className="cards-wrapper">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="results-box">
        {error && <p className="error-message">{error}</p>}
        {loading && <p className="loading-text">Fetching weather...</p>}
        {weather && <WeatherCard weather={weather} />}
        {forecast.length > 0 && <ForecastCard forecast={forecast} />}
      </div>
    </div>
  );
};

export default SearchWeather;
