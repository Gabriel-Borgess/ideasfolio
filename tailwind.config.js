/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./public/**/*.html",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    
  ],
  theme: {
    extend: {
      "colors": {
        "myColor": {
          "50": "#e9fdfa",
          "100": "#d4fbf5",
          "200": "#a8f6eb",
          "300": "#7df2e0",
          "400": "#51edd6",
          "500": "#26e9cc",
          "600": "#1ebaa3",
          "700": "#178c7a",
          "800": "#0f5d52",
          "900": "#082f29"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
};