 /** @type {import('tailwindcss').Config} */
 module.exports = {
   content: [
     "./components/**/*.{js,vue,ts}",
     "./layouts/**/*.vue",
     "./pages/**/*.vue",
     "./plugins/**/*.{js,ts}",
     "./app.vue",
     "./error.vue"
   ],
   theme: {
     extend: {
       colors: {
         navy: {
           950: '#03060A',
           900: '#050A0F',
           850: '#08131B',
           800: '#0D1821',
           700: '#152432',
           600: '#1E3245'
         },
         gold: {
           300: '#F4E0A5',
           400: '#E6CA78',
           500: '#D4AF37',
           600: '#AA8825',
           700: '#7F6418'
         },
         ivory: {
           100: '#FDFBF7',
           200: '#F4EFE6',
           300: '#E5DDCF',
           400: '#B8AF9E'
         }
       },
       fontFamily: {
         serif: ['Cinzel', 'Georgia', 'serif'],
         sans: ['Plus Jakarta Sans', 'sans-serif'],
         mono: ['JetBrains Mono', 'monospace']
       },
       animation: {
         'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
         'float': 'float 6s ease-in-out infinite',
         'glow': 'glow 3s ease-in-out infinite alternate',
       },
       keyframes: {
         float: {
           '0%, 100%': { transform: 'translateY(0px)' },
           '50%': { transform: 'translateY(-10px)' },
         },
         glow: {
           '0%': { filter: 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.3))' },
           '100%': { filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.7))' },
         }
       }
     },
   },
   plugins: [],
 }