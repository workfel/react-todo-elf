module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
