import { ReactElement } from "react";
import {
    LuCloud,
    LuCloudDrizzle,
    LuCloudFog,
    LuCloudHail,
    LuCloudLightning,
    LuCloudMoon,
    LuCloudMoonRain,
    LuCloudRain,
    LuCloudSnow,
    LuCloudSun,
    LuCloudSunRain,
    LuMoon,
    LuSun,
} from "react-icons/lu";

interface Code {
    day: {
        description: string;
        icon: ReactElement;
    };
    night: {
        description: string;
        icon: ReactElement;
    };
}

const codes: { [code: number]: Code } = {
    0: {
        day: {
            description: "Sunny",
            icon: <LuSun />,
        },
        night: {
            description: "Clear",
            icon: <LuMoon />,
        },
    },
    1: {
        day: {
            description: "Mainly Sunny",
            icon: <LuSun />,
        },
        night: {
            description: "Mainly Clear",
            icon: <LuMoon />,
        },
    },
    2: {
        day: {
            description: "Partly Cloudy",
            icon: <LuCloudSun />,
        },
        night: {
            description: "Partly Cloudy",
            icon: <LuCloudMoon />,
        },
    },
    3: {
        day: {
            description: "Cloudy",
            icon: <LuCloud />,
        },
        night: {
            description: "Cloudy",
            icon: <LuCloud />,
        },
    },
    45: {
        day: {
            description: "Foggy",
            icon: <LuCloudFog />,
        },
        night: {
            description: "Foggy",
            icon: <LuCloudFog />,
        },
    },
    48: {
        day: {
            description: "Rime Fog",
            icon: <LuCloudFog />,
        },
        night: {
            description: "Rime Fog",
            icon: <LuCloudFog />,
        },
    },
    51: {
        day: {
            description: "Light Drizzle",
            icon: <LuCloudDrizzle />,
        },
        night: {
            description: "Light Drizzle",
            icon: <LuCloudDrizzle />,
        },
    },
    53: {
        day: {
            description: "Drizzle",
            icon: <LuCloudDrizzle />,
        },
        night: {
            description: "Drizzle",
            icon: <LuCloudDrizzle />,
        },
    },
    55: {
        day: {
            description: "Heavy Drizzle",
            icon: <LuCloudDrizzle />,
        },
        night: {
            description: "Heavy Drizzle",
            icon: <LuCloudDrizzle />,
        },
    },
    56: {
        day: {
            description: "Light Freezing Drizzle",
            icon: <LuCloudDrizzle />,
        },
        night: {
            description: "Light Freezing Drizzle",
            icon: <LuCloudDrizzle />,
        },
    },
    57: {
        day: {
            description: "Freezing Drizzle",
            icon: <LuCloudDrizzle />,
        },
        night: {
            description: "Freezing Drizzle",
            icon: <LuCloudDrizzle />,
        },
    },
    61: {
        day: {
            description: "Light Rain",
            icon: <LuCloudSunRain />,
        },
        night: {
            description: "Light Rain",
            icon: <LuCloudMoonRain />,
        },
    },
    63: {
        day: {
            description: "Rain",
            icon: <LuCloudRain />,
        },
        night: {
            description: "Rain",
            icon: <LuCloudRain />,
        },
    },
    65: {
        day: {
            description: "Heavy Rain",
            icon: <LuCloudRain />,
        },
        night: {
            description: "Heavy Rain",
            icon: <LuCloudRain />,
        },
    },
    66: {
        day: {
            description: "Light Freezing Rain",
            icon: <LuCloudRain />,
        },
        night: {
            description: "Light Freezing Rain",
            icon: <LuCloudRain />,
        },
    },
    67: {
        day: {
            description: "Freezing Rain",
            icon: <LuCloudRain />,
        },
        night: {
            description: "Freezing Rain",
            icon: <LuCloudRain />,
        },
    },
    71: {
        day: {
            description: "Light Snow",
            icon: <LuCloudSnow />,
        },
        night: {
            description: "Light Snow",
            icon: <LuCloudSnow />,
        },
    },
    73: {
        day: {
            description: "Snow",
            icon: <LuCloudSnow />,
        },
        night: {
            description: "Snow",
            icon: <LuCloudSnow />,
        },
    },
    75: {
        day: {
            description: "Heavy Snow",
            icon: <LuCloudSnow />,
        },
        night: {
            description: "Heavy Snow",
            icon: <LuCloudSnow />,
        },
    },
    77: {
        day: {
            description: "Snow Grains",
            icon: <LuCloudSnow />,
        },
        night: {
            description: "Snow Grains",
            icon: <LuCloudSnow />,
        },
    },
    80: {
        day: {
            description: "Light Showers",
            icon: <LuCloudRain />,
        },
        night: {
            description: "Light Showers",
            icon: <LuCloudRain />,
        },
    },
    81: {
        day: {
            description: "Showers",
            icon: <LuCloudRain />,
        },
        night: {
            description: "Showers",
            icon: <LuCloudRain />,
        },
    },
    82: {
        day: {
            description: "Heavy Showers",
            icon: <LuCloudRain />,
        },
        night: {
            description: "Heavy Showers",
            icon: <LuCloudRain />,
        },
    },
    85: {
        day: {
            description: "Light Snow Showers",
            icon: <LuCloudSnow />,
        },
        night: {
            description: "Light Snow Showers",
            icon: <LuCloudSnow />,
        },
    },
    86: {
        day: {
            description: "Snow Showers",
            icon: <LuCloudSnow />,
        },
        night: {
            description: "Snow Showers",
            icon: <LuCloudSnow />,
        },
    },
    95: {
        day: {
            description: "Thunderstorm",
            icon: <LuCloudLightning />,
        },
        night: {
            description: "Thunderstorm",
            icon: <LuCloudLightning />,
        },
    },
    96: {
        day: {
            description: "Light Thunderstorms With Hail",
            icon: <LuCloudHail />,
        },
        night: {
            description: "Light Thunderstorms With Hail",
            icon: <LuCloudHail />,
        },
    },
    99: {
        day: {
            description: "Thunderstorm With Hail",
            icon: <LuCloudHail />,
        },
        night: {
            description: "Thunderstorm With Hail",
            icon: <LuCloudHail />,
        },
    },
};

export const getWeatherIcon = (weatherCode: number, is_day: number) => {
    try {
        return is_day === 1
            ? codes[weatherCode].day.icon
            : codes[weatherCode].night.icon;
    } catch (err) {
        return is_day === 1 ? <LuSun /> : <LuMoon />;
    }
};
