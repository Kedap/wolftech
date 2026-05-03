/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',

      wolf_black:       '#06080C',
      wolf_dark:        '#0D1117',
      wolf_steel:       '#1C2333',
      wolf_steel_mid:   '#243047',
      wolf_steel_light: '#2E3F5C',

      wolf_blue:        '#00D4FF',
      wolf_blue_dim:    '#0095B3',
      wolf_blue_dark:   '#003D4D',

      wolf_orange:      '#FF6B35',
      wolf_orange_dim:  '#CC4F1E',

      wolf_green:       '#00FF9F',

      wolf_white:       '#E8EDF4',
      wolf_gray:        '#8B95A6',
      wolf_gray_dark:   '#4A5568',
    },
    extend: {
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        body:    ['Exo 2', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'monospace'],
      },
    }
  },
  plugins: []
}
