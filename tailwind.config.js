/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        button: 'rgba(255, 255, 255,v0.7',
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
    screen: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      
    },
    
  },
  plugins: [],
};












// backgroundColor: {
//   primary: 'var(--color-bg-primary)',
//   secondary: 'var(--color-bg-secondary)',
//   button: 'var(--color-bg-button)'
// },
// accent: 'var(--color-text-accent)',
// primary: 'var(--color-text-primary)',
// secondary: 'var(--color-text-secondary)',
// btnText: 'var(--color-bg-secondary)'
// },
// borderColor: {
// primary: 'var(--color-bg-primary)',
// secondary: 'var(--color-bg-secondary)',
// input: 'var(--color-bg-input)',
// accent: 'var(--color-bg-accent)',
// }
