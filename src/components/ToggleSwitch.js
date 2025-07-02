import React from "react";

const ToggleSwitch = ({ isGeolocation, setIsGeolocation }) => (
  <div className="toggle-container">
    <div className="toggle-switch" onClick={() => setIsGeolocation(!isGeolocation)}>
      <span className={!isGeolocation ? "active" : ""}>Search Weather</span>
      <span className={isGeolocation ? "active" : ""}>Geolocation Weather</span>
    </div>
  </div>
);

export default ToggleSwitch;
