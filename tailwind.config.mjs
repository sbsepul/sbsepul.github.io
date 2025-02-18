/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['brockmann-regular', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#111111',
          accent: '#ffffff',
          muted: '#888888',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};