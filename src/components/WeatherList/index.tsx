import React, { useState } from 'react';
import { WeatherListProps } from "../../WeatherTypes";
import WeatherCard from '../WeatherCard';
import { weatherData } from '../../data/weatherData';
import "./index.css";

const WeatherList: React.FC<WeatherListProps> = ({onSearch, results, favorites, onAddToFavorites, onRemoveFromFavorites, temperatureUnit, toggleTemperatureUnit}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const convertTemperature = (temp: number) => 
    temperatureUnit === "F" ? (temp * 9 / 5) + 32 : temp;
  return (
    <div className="layout-column align-items-center justify-content-start weather-list" data-testid="weather-list">
      <h3>Dashboard</h3>
      <p className="city-details">Search for Current Temperature in cities like: New York, London, Paris etc.</p>
      <div className="card w-300 pt-20 pb-5 mt-5">
        <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
          <input
            type="text"
            placeholder="Search city"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery} 
            data-testid="search-input"
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={() => {}} data-testid="clear-search-button">
            Clear search
          </button>
        </section>
        <table className="table search-results">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {results.map((weather) => (
                <WeatherCard
                key={weather.id}
                weather={{...weather, temperature: parseFloat(convertTemperature(weather.temperature).toFixed(1))}}
                isFavorite={favorites.some(fav => fav.cityName === weather.cityName)}
                onAddToFavorites={onAddToFavorites}
                onRemoveFromFavorites={onRemoveFromFavorites}
                temperatureUnit={temperatureUnit}
              />
            ))}
          </tbody>
        </table>
        <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
          <button onClick={toggleTemperatureUnit} data-testid="unit-change-button" className="outlined">
            Switch to {temperatureUnit === "C" ? "Fahrenheit" : "Celsius"}
          </button>
        </section>
      </div>
      <h3>Favourite Cities</h3>
      <div className="card w-300 pt-20 pb-5">
        <table className="table favorites">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {favorites.map((weather) => (
            <WeatherCard 
              key={weather.cityName}
                weather={{...weather, temperature: parseFloat(convertTemperature(weather.temperature).toFixed(1))}}
                isFavorite={true}
                onAddToFavorites={onAddToFavorites}
                onRemoveFromFavorites={onRemoveFromFavorites}
                temperatureUnit={temperatureUnit}
              />
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherList;
