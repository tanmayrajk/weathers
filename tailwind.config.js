/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            green: "#606C38",
            darkgreen: "#283618",
            beige: "#FEFAE0",
            lightorange: "#F3C28D",
            orange: "#BC6C25",
        },
        extend: {
            fontFamily: {
                mono: ["JetBrains Mono", "monospace"],
            },
        },
    },
    plugins: [],
};
