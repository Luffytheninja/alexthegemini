import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF',
                charcoal: '#1A1A1A',
                smoke: '#F5F5F5',
            },
            fontFamily: {
                body: ['var(--font-body)'],
                heading: ['var(--font-heading)'],
            },
            letterSpacing: {
                tighter: '-0.02em',
                widest: '0.1em',
            },
        },
    },
    plugins: [],
};
export default config;
