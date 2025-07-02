import React, { useState } from "react";
import SearchWeather from "./pages/SearchWeather";
import GeolocationWeather from "./pages/GeolocationWeather";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [isGeolocation, setIsGeolocation] = useState(false);

  return (
    <div className="app-wrapper">
      <div className="container">
        <h1>Weather Forecast Dashboard</h1>
        <ToggleSwitch
          isGeolocation={isGeolocation}
          setIsGeolocation={setIsGeolocation}
        />
        <div className="content">
          {isGeolocation ? <GeolocationWeather /> : <SearchWeather />}
        </div>
      </div>
    </div>
  );
}

export default App;
