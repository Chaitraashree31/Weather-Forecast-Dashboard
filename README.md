# Weather Forecast Dashboard

A responsive web application that provides real-time weather updates and 5-day forecasts using the OpenWeatherMap and Geolocation APIs. Built with React, the dashboard supports both manual city search and geolocation-based weather retrieval.

## Features

- Manual city search with 800ms debounce
- Toggle between city search and geolocation-based weather
- Current weather display includes:
  - City and country
  - Date and day
  - Weather icon and description
  - Temperature, humidity, pressure, and wind speed
- 5-day forecast (excluding today)
- Fully responsive layout for all screen sizes

## Technologies Used

- React
- JavaScript (ES6)
- CSS3
- HTML5
- OpenWeatherMap API
- Geolocation API

## Setup Instructions

1. Clone the repository

2. Create a .env file in the project root

    REACT_APP_WEATHER_API_KEY=your_api_key

3. Install dependencies

   npm install

4. Start the development server

   npm start
