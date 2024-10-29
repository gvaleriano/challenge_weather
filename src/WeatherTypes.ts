// src/types/WeatherTypes.ts

export interface WeatherData {
  id: number;
  cityName: string;
  temperature: number;
  description: string;
}

export interface WeatherCardProps {
  weather: WeatherData;
  isFavorite: boolean;
  onAddToFavorites: (cityName: string) => void;
  onRemoveFromFavorites: (cityName: string) => void;
  temperatureUnit: "C" | "F";
}

export interface WeatherListProps {
  results: WeatherData[];
  favorites: WeatherData[];
  onSearch: (cityName: string) => void;
  onAddToFavorites: (cityName: string) => void;
  onRemoveFromFavorites: (cityName: string) => void;
  temperatureUnit: "C" | "F";
  toggleTemperatureUnit: () => void;
}
