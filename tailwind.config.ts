/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        borderRadius: {
          'arc-left-1': '0 50% 0 0',
          'arc-left-2': '0 35% 0 0',
          'arc-left-3': '0 10% 0 0',
          'arc-right-1': '10% 0 0 0',
          'arc-right-2': '35% 0 0 0',
          'arc-right-3': '50% 0 0 0',
        },
        gridTemplateColumns: {
          'layout': 'auto 1fr'
        },
        gridTemplateRows: {
          'layout': 'auto 1fr'
        }
      },
    },
    plugins: [],
}