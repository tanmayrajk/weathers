import { useEffect, useState } from "react";
import { AppData, OptionData, ViewData } from "../global";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { DateTime } from "luxon";
import { IconContext } from "react-icons";
import useThemeDetector from "../hooks/useThemeDetector";

function WeatherChangeButton({
    data,
    date,
    setDate,
}: {
    data: OptionData;
    date: string;
    setDate: Function;
}) {
    const isDarkTheme = useThemeDetector();
    return (
        <div
            className={`group p-3 border-2 flex flex-col items-center font-mono mr-3 last:mr-0 cursor-pointer border-dashed rounded-md transition-all hover:bg-green hover:border-beige dark:hover:bg-lightorange dark:hover:border-darkgreen ${data.date === date && isDarkTheme ? "bg-lightorange border-darkgreen" : data.date === date && !isDarkTheme ? "bg-green border-beige" : isDarkTheme ? "bg-darkgreen border-lightorange" : "border-green bg-beige"}`}
            onClick={() => {
                setDate(data.date);
            }}
        >
            <div
                className={`text-sm font-medium group-hover:text-beige dark:group-hover:text-darkgreen ${data.date === date && isDarkTheme ? "text-darkgreen" : data.date === date && !isDarkTheme ? "text-beige" : isDarkTheme ? "text-lightorange" : "text-green"}`}
            >
                {DateTime.fromISO(data.date).toString().slice(0, 10) ===
                DateTime.now().toString().slice(0, 10)
                    ? "Today"
                    : DateTime.fromISO(data.date).weekdayShort}
            </div>
            <div
                className={`pt-1 pb-1 group-hover:text-beige dark:group-hover:text-darkgreen ${data.date === date && isDarkTheme ? "text-darkgreen" : data.date === date && !isDarkTheme ? "text-beige" : isDarkTheme ? "text-lightorange" : "text-green"}`}
            >
                <IconContext.Provider value={{ size: "2.5em" }}>
                    {getWeatherIcon(data.weather_code, data.is_day)}
                </IconContext.Provider>
            </div>
            <div
                className={`text-sm font-medium group-hover:text-beige dark:group-hover:text-darkgreen ${data.date === date && isDarkTheme ? "text-darkgreen" : data.date === date && !isDarkTheme ? "text-beige" : isDarkTheme ? "text-lightorange" : "text-green"}`}
            >
                {Math.round(data.max_temperature)}°/
                {Math.round(data.min_temperature)}°
            </div>
        </div>
    );
}

export default function WeatherChange({
    viewData,
    appData,
    setViewData,
}: {
    viewData: ViewData;
    appData: AppData;
    setViewData: (viewData: ViewData) => any;
}) {
    const [date, setDate] = useState(viewData.view_data.date);

    useEffect(() => {
        let out = {};
        const view_data = appData.view_data.filter(
            (data) => data.date === date
        )[0];
        const graph_data = appData.graph_data.filter(
            (data) => data.date === date
        )[0];
        out = { view_data, graph_data };
        setViewData(out as ViewData);
    }, [date, appData]);

    const elements = [];

    for (let i = 0; i < 8; i++) {
        elements.push(
            <WeatherChangeButton
                key={i}
                data={appData.option_data[i]}
                date={date}
                setDate={setDate}
            />
        );
    }

    return (
        <div
            id="real"
            className="flex pt-5 max-md:overflow-x-auto max-md:w-screen max-md:px-6"
        >
            {elements}
        </div>
    );
}
