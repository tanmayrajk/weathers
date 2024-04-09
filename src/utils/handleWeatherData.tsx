import { GraphData, MainData, OptionData, WeatherData } from "../global";
import { equallySplit, populateArray } from "./array";

export const handleWeatherData = (weatherData: any) => {
    let weather = weatherData as WeatherData;
    weather.hourly.time = equallySplit(weather.hourly.time, 24) as string[][];
    weather.hourly.temperature_2m = equallySplit(
        weather.hourly.temperature_2m,
        24
    ) as number[][];
    weather.hourly.relative_humidity_2m = equallySplit(
        weather.hourly.relative_humidity_2m,
        24
    ) as number[][];
    weather.hourly.precipitation = equallySplit(
        weather.hourly.precipitation,
        24
    ) as number[][];
    weather.hourly.wind_speed_10m = equallySplit(
        weather.hourly.wind_speed_10m,
        24
    ) as number[][];

    const mainData: MainData[] = [];
    const graphData: GraphData[] = [];
    const optionData: OptionData[] = [];

    populateArray(
        mainData,
        {
            date: "",
            temperature: NaN,
            humidity: NaN,
            precipitation: NaN,
            wind: NaN,
        },
        8
    );

    populateArray(
        graphData,
        {
            date: "",
            time: [],
            temperature: [],
            humidity: [],
            precipitation: [],
            wind: [],
        },
        8
    );

    populateArray(
        optionData,
        {
            date: "",
            max_temperature: NaN,
            min_temperature: NaN,
            weather_code: NaN,
        },
        8
    );

    for (let i = 0; i < 8; i++) {
        optionData[i] = {
            date: weather.daily.time[i],
            is_day: weather.current.is_day,
            max_temperature: weather.daily.temperature_2m_max[i],
            min_temperature: weather.daily.temperature_2m_min[i],
            weather_code: weather.daily.weather_code[i],
        };

        if (i === 1) {
            mainData[i] = {
                date: weather.daily.time[i],
                weather_code: weather.current.weather_code,
                is_day: weather.current.is_day,
                temperature: weather.current.temperature_2m,
                humidity: weather.current.relative_humidity_2m,
                precipitation: weather.current.precipitation,
                wind: weather.current.wind_speed_10m,
            };
        } else {
            mainData[i] = {
                date: weather.daily.time[i],
                weather_code: weather.daily.weather_code[i],
                is_day: weather.current.is_day,
                temperature: weather.daily.temperature_2m_max[i],
                humidity: Math.max(...weather.hourly.relative_humidity_2m[0]),
                precipitation: Math.max(...weather.hourly.precipitation[0]),
                wind: Math.max(...weather.hourly.wind_speed_10m[0]),
            };
        }

        graphData[i] = {
            date: weather.daily.time[i],
            time: weather.hourly.time[i],
            temperature: weather.hourly.temperature_2m[i],
            humidity: weather.hourly.relative_humidity_2m[i],
            precipitation: weather.hourly.precipitation[i],
            wind: weather.hourly.wind_speed_10m[i],
        };
    }
    return { mainData, graphData, optionData };
};
