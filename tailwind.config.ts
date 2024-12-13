import type {Config} from "tailwindcss";

import forms from "@tailwindcss/forms";
import { PluginAPI } from "tailwindcss/types/config";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [
        forms,
        function ({addVariant}: PluginAPI) {
            addVariant('supports-scrollbars', '@supports selector(::-webkit-scrollbar)')
            addVariant('scrollbar', '&::-webkit-scrollbar')
            addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
            addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
        },
    ],
} satisfies Config;
