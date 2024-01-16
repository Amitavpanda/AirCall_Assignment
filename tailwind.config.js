module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: {
          500: '#624CF5',
          50: ' #F6F8FD',
        },
        coral: {
          500: '#15BF59',
        },

        grey: {
          600: '#545454', 
          500: '#757575',
          400: '#AFAFAF',
          50: '#F6F6F6', 
        },
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        brown : {
          50 : '#A2783A',
          30 : 'rgba(0, 0, 0, 0.25)',
        },
        black : {
          100 : '#000',
        },
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}