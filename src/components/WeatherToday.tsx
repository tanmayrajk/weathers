import { IconContext } from "react-icons";
import { ViewData } from "../global";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Legend,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { DateTime } from "luxon";
import legendToggle from "../utils/legendToggle";
import useThemeDetector from "../hooks/useThemeDetector";

ChartJS.register(
    ChartDataLabels,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function WeatherToday({ data }: { data: ViewData }) {
    const isDarkTheme = useThemeDetector();
    const graphBorderColor = isDarkTheme ? "#BC6C25" : "#283618";
    const graphBgColor = isDarkTheme ? "#F3C28D" : "#606C38";

    const time_data = {
        labels: data.graph_data.time.map((time) =>
            DateTime.fromISO(time).toFormat("HH:mm")
        ),
        datasets: [
            {
                fill: true,
                label: "Temperature (°C)",
                data: data.graph_data.temperature,
                borderColor: graphBorderColor,
                backgroundColor: graphBgColor,
            },
            {
                fill: true,
                hidden: true,
                label: "Humidity (%)",
                data: data.graph_data.humidity,
                borderColor: graphBorderColor,
                backgroundColor: graphBgColor,
            },
            {
                fill: true,
                hidden: true,
                label: "Wind Speed (km/h)",
                data: data.graph_data.wind,
                borderColor: graphBorderColor,
                backgroundColor: graphBgColor,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                display: true,
                onClick: legendToggle,
                labels: {
                    color: graphBgColor,
                    font: {
                        family: "JetBrains Mono",
                        // weight: "bold",
                    },
                },
            },
        },
        elements: {
            line: {
                borderWidth: 2,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
    };

    return (
        <div
            className="flex mb-5 justify-center flex-row max-md:flex-col"
            style={{ width: document.getElementById("real")?.offsetWidth }}
        >
            <div className="inline-block p-5 pl-0 text-left max-md:text-center font-mono h-48 text-green dark:text-lightorange">
                <div className="flex items-center justify-center">
                    <div className="mb-3 ml-2">
                        <IconContext.Provider value={{ size: "4em" }}>
                            {getWeatherIcon(
                                data.view_data.weather_code,
                                data.view_data.is_day
                            )}
                        </IconContext.Provider>
                    </div>
                    <div className="text-6xl ml-3 mb-3 font-semibold">
                        {Math.round(data.view_data.temperature)}°C
                    </div>
                </div>
                <div className="flex flex-col pl-3 font-semibold">
                    <div>Humidity: {Math.round(data.view_data.humidity)}%</div>
                    <div>
                        Precipitation:{" "}
                        {Math.round(data.view_data.precipitation)}mm
                    </div>
                    <div>Wind: {Math.round(data.view_data.wind)}km/h</div>
                </div>
            </div>
            <div className="h-48 p-5 w-full max-md:w-full">
                <Line options={options} data={time_data} />
            </div>
        </div>
    );
}
