/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thBg: "#F8FAFC",         // slate-50
        thInk: "#0F172A",        // slate-900
        thSub: "#334155",        // slate-700
        thPrimary: "#06B6D4",    // cyan-500 (logo turquoise)
        thAccent: "#8B5CF6",     // violet-500 (logo purple)
        thHighlight: "#FBBF24",  // amber-400 (logo yellow)
        thRing: "rgb(6 182 212 / 60%)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,6,23,.06)",
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
