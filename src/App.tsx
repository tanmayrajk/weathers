import { useGeolocated } from "react-geolocated";
import { useEffect, useState } from "react";
import { isObjectEmpty } from "./utils/isObjectEmpty";
import WeatherToday from "./components/WeatherToday";
import { handleWeatherData } from "./utils/handleWeatherData";
import { AppData, ViewData } from "./global";
import WeatherChange from "./components/WeatherChange";

function App() {
    const {
        coords,
        getPosition,
        isGeolocationAvailable,
        isGeolocationEnabled,
    } = useGeolocated({
        positionOptions: { enableHighAccuracy: false },
        userDecisionTimeout: 5000,
        watchPosition: false,
    });
    const [appData, setAppData]: [AppData, (appData: AppData) => any] =
        useState([] as unknown as AppData);
    const [viewData, setViewData]: [ViewData, (viewData: ViewData) => any] =
        useState({} as ViewData);
    const [weatherError, setWeatherError]: [unknown, Function] = useState();

    useEffect(() => {
        async function fetchWeather(latitude: number, longitude: number) {
            try {
                const data = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&past_days=1`
                );
                const weather = await data.json();
                const { mainData, graphData, optionData } =
                    handleWeatherData(weather);
                setAppData({
                    view_data: mainData,
                    graph_data: graphData,
                    option_data: optionData,
                });
                setViewData({
                    view_data: mainData[1],
                    graph_data: graphData[1],
                });
            } catch (err) {
                console.error(err);
                setWeatherError(err);
            }
        }

        if (coords) {
            console.log("bro");
            fetchWeather(coords.latitude, coords.longitude);
        }
    }, [coords]);

    return !isGeolocationAvailable ? (
        <div className="flex text-green dark:text-lightorange h-full flex-col justify-center items-center font-semibold">
            The browser doesn't support the Geolocation API. Trying using a
            different browser to use the app.
        </div>
    ) : !isGeolocationEnabled ? (
        <div className="flex text-green dark:text-lightorange h-full flex-col justify-center items-center font-semibold">
            To use the app, you need to enable location.
            <button
                className="mt-3 bg-green rounded-md transition-all dark:bg-lightorange text-beige dark:text-darkgreen hover:bg-darkgreen active:bg-darkgreen dark:hover:bg-beige dark:active:bg-beige font-semibold py-2 px-5 "
                onClick={getPosition}
            >
                Enable Geolocation
            </button>
        </div>
    ) : coords && isObjectEmpty(viewData) && !weatherError ? (
        <div className="flex text-green dark:text-lightorange h-full flex-col justify-center items-center font-semibold">
            Getting the weather...
        </div>
    ) : isObjectEmpty(viewData) && weatherError ? (
        <div className="flex text-green dark:text-lightorange h-full flex-col justify-center items-center font-semibold">
            There was an issue in getting the weather. Try again later.
        </div>
    ) : !isObjectEmpty(viewData) && !weatherError ? (
        <div className="flex flex-col h-full justify-center items-center">
            <WeatherToday data={viewData} />
            <WeatherChange
                appData={appData}
                setViewData={setViewData}
                viewData={viewData}
            />
        </div>
    ) : (
        <div className="flex text-green dark:text-lightorange h-full flex-col justify-center items-center font-semibold">
            Getting your location...
        </div>
    );
}

export default App;
