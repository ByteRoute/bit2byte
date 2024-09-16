/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'blue-main': '#004AAD', // Deep Blue (Primary Color)
            'blue-secondary': '#1E90FF', // Sky Blue (Secondary Color)
            'gold-accent': '#FFD700', // Gold (Accent Color)
            'background': '#F5F5F5', // Light Gray (Background Color)
            'text': '#333333', // Dark Gray (Text Color)
        },

    },
    plugins: [
        require('daisyui'),
        require('flowbite/plugin'),
        require('@tailwindcss/line-clamp'),
    ], daisyui: {
        themes: ["light"],
    },
}