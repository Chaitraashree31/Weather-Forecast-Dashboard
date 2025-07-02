const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const fetchWeatherData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error();
    return await response.json();
  } catch {
    return null;
  }
};

export const fetchWeatherByCity = (city) =>
  fetchWeatherData(`weather?q=${encodeURIComponent(city)}`);

export const fetchForecastByCity = async (city) => {
  const data = await fetchWeatherData(`forecast?q=${encodeURIComponent(city)}`);
  return data ? filterFiveDayForecast(data) : [];
};

export const fetchWeatherByCoords = (lat, lon) =>
  fetchWeatherData(`weather?lat=${lat}&lon=${lon}`);

export const fetchForecastByCoords = async (lat, lon) => {
  const data = await fetchWeatherData(`forecast?lat=${lat}&lon=${lon}`);
  return data ? filterFiveDayForecast(data) : [];
};

const filterFiveDayForecast = (data) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const forecastByDay = new Map();

  for (const item of data.list) {
    const itemDate = new Date(item.dt * 1000);
    itemDate.setHours(0, 0, 0, 0);
    if (itemDate > now && !forecastByDay.has(itemDate.toDateString())) {
      forecastByDay.set(itemDate.toDateString(), item);
    }
    if (forecastByDay.size === 5) break;
  }

  return Array.from(forecastByDay.values());
};
