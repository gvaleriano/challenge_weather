import React from 'react';
import { WeatherCardProps } from "../../WeatherTypes";
const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  onAddToFavorites,
  onRemoveFromFavorites,
  isFavorite,
}) => {

  return (
    <tr className="weather-card" data-testid={`weather-card-${weather.id}`}>
      <td>{weather.cityName}</td>
      <td>{weather.temperature}{isFavorite ? "C" : "F"}</td>
      <td>{weather.description}</td>
      <td>
        <button onClick={() => isFavorite ? onRemoveFromFavorites(weather.cityName) : onAddToFavorites(weather.cityName)} data-testid={`weather-card-action-${weather.id}`}>
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      </td>
    </tr>
  );
};

export default WeatherCard;

