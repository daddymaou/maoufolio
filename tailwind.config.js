module.exports = {
  content: [
    "src/**/*.{js,ts,jsx,tsx}",
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Apoc-Normal-Trial: regular (400) and bold (700)
        'normal': ['Apoc-Normal-Trial', 'sans-serif'],
        // Apoc-Revelations-Trial: used for display headings
        'display': ['Apoc-Revelations-Trial', 'sans-serif'],
        // Apoc-Sans-Trial: light and regular
        'sans': ['Apoc-Sans-Trial', 'sans-serif'],
        'mono': ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#181815',
          dark: '#10100f',
          light: '#f2f0ea',
        },
        gold: {
          DEFAULT: '#c4a35a',
          light: '#d4b87a',
          600: '#c4a35a',
        },
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(180deg, #f2f0ea 0%, #e8e4d8 100%)',
      },
      backgroundPosition: {
        'footer': '0 0, 0 100%',
      },
    },
  },
  plugins: [],
};
