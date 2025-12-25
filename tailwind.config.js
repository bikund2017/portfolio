/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // B&W Theme Colors
        primary: '#ffffff',
        secondary: '#888888',
        accent: '#cccccc',
        dark: '#0a0a0a',
        darker: '#000000',
        muted: '#666666',
        // Legacy gradient colors (for compatibility)
        gradient1: '#000000',
        gradient2: '#0a0a0a',
        gradient3: '#1a1a1a',
        gradient4: '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.1)',
        'glow-lg': '0 0 40px rgba(255, 255, 255, 0.15)',
      }
    },
  },
  plugins: [],
}
