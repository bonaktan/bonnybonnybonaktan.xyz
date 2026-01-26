import type { Config } from "tailwindcss";

export default {
    content: [],
    theme: {
        extend: {
            colors: {
                "main": {
                    "50": "#e5f6ff",
                    "100": "#ccedff",
                    "200": "#99dbff",
                    "300": "#66c9ff",
                    "400": "#33b8ff",
                    "500": "#00a6ff",
                    "600": "#0085cc",
                    "700": "#006399",
                    "800": "#004266",
                    "900": "#002133",
                    "950": "#001724",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
