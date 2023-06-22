interface CurrentWeather {
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}

interface Daily {
  temperature_2m_max: number;
  temperature_2m_min: number;
  time: string;
  uv_index_max: number;
}

interface DailyUnits {
  temperature_2m_max: number;
  temperature_2m_min: number;
  time: string;
  uv_index_max: number;
}

interface Hourly {
  apparent_temperature: number;
  cloudcover: number;
  precipitation: number;
  precipitation_probability: number;
  pressure_msl: number;
  relativehumidity_2m: number;
  temperature_2m: number;
  time: string;
  visibility: number;
}

interface HourlyUnits {
  apparent_temperature: string;
  cloudcover: string;
  precipitation: string;
  precipitation_probability: string;
  pressure_msl: string;
  relativehumidity_2m: string;
  temperature_2m: string;
  time: string;
  visibility: string;
}

interface Root {
  current_weather: CurrentWeather;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: number;
  generationtime_ms: number;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
