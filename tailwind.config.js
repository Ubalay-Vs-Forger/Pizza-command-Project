// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 5s linear infinite', // медленнее
                'spin-slower': 'spin 8s linear infinite', // ещё медленнее
            },
        },
    },
    plugins: [],
}
