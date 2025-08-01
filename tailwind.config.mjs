// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-color)',
        text: 'var(--text-color)',
        primary: 'var(--primary-color)',
        accent: 'var(--accent-color)',
      },
      borderRadius: {
        main: 'var(--border-radius-main)',
        btn: 'var(--border-radius-btn)',
        header: 'var(--border-radius-header)',
      },
      boxShadow: {
        solid: 'var(--shadow-offset) var(--shadow-offset) 0px var(--shadow-color)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}