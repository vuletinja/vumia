/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        


"primary": "#7e22ce",
        


"secondary": "#c084fc",
        


"accent": "#3b82f6",
        


"neutral": "#2a323c",
        


"base-100": "#1d232a",
        


"info": "#60a5fa",
        


"success": "#10b981",
        


"warning": "#fde047",
        


"error": "#fb7185",
        },
      },
    ],
  },


  plugins: [require("daisyui")],
}

