/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thBg: "#F8FAFC",         // slate-50
        thInk: "#0F172A",        // slate-900
        thSub: "#334155",        // slate-700
        thPrimary: "#4F46E5",    // indigo-600 (primary CTA)
        thAccent: "#6366F1",     // indigo-500 (lighter variant)
        thHighlight: "#FBBF24",  // amber-400 (logo yellow, used sparingly)
        thRing: "rgb(79 70 229 / 50%)"
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
