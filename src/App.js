import React, { useState } from 'react';
import './App.css';
import 'h8k-components';
import WeatherList from './components/WeatherList';
import { weatherData } from "./data/weatherData";

const title = "Weather Dashboard";

function App() {
  const [results, setResults] = useState(weatherData);
  const [favorites, setFavorites] = useState([]);
  const [temperatureUnit, setTemperatureUnit] = useState("C");

  const handleSearch = (cityName) => {
    const result = weatherData.find(weather => weather.cityName.toLowerCase() === cityName.toLowerCase());
    setResults(result ? [result] : []);
  };

  const handleAddToFavorites = (cityName) => {
    const city = weatherData.find(weather => weather.cityName === cityName);
    if (city && !favorites.some(fav => fav.cityName === cityName)) {
      setFavorites([...favorites, city]);
    }
  };

  const handleRemoveFromFavorites = (cityName) => {
    setFavorites(favorites.filter(city => city.cityName !== cityName));
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit(prevUnit => (prevUnit === "C" ? "F" : "C"));
  };
  return (
    <div className="App">
      <h8k-navbar header={title} data-testId="navbar"></h8k-navbar>
      <WeatherList 
        onSearch={handleSearch}
        results={results}
        favorites={favorites}
        onAddToFavorites={handleAddToFavorites}
        onRemoveFromFavorites={handleRemoveFromFavorites}
        temperatureUnit={temperatureUnit}
        toggleTemperatureUnit={toggleTemperatureUnit}
      />
    </div>
  );
}

export default App;
