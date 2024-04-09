export interface WeatherData {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: CurrentUnits;
    current: Current;
    hourly_units: HourlyUnits;
    hourly: Hourly;
    daily_units: DailyUnits;
    daily: Daily;
}

export interface Current {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    is_day: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
}

export interface CurrentUnits {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    is_day: string;
    precipitation: string;
    weather_code: string;
    wind_speed_10m: string;
}

export interface Daily {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
}

export interface DailyUnits {
    time: string;
    weather_code: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
}

export interface Hourly {
    time: string[][];
    temperature_2m: number[][];
    relative_humidity_2m: number[][];
    precipitation: number[][];
    wind_speed_10m: number[][];
}

export interface HourlyUnits {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    precipitation: string;
    wind_speed_10m: string;
}

export interface MainData {
    date: string;
    weather_code: number;
    is_day: number;
    temperature: number;
    humidity: number;
    precipitation: number;
    wind: number;
}

export interface GraphData {
    date: string;
    time: string[];
    temperature: number[];
    humidity: number[];
    precipitation: number[];
    wind: number[];
}

export interface OptionData {
    date: string;
    min_temperature: number;
    max_temperature: number;
    weather_code: number;
    is_day: number;
}

export interface AppData {
    view_data: MainData[];
    graph_data: GraphData[];
    option_data: OptionData[];
}

export interface ViewData {
    view_data: MainData;
    graph_data: GraphData;
}
