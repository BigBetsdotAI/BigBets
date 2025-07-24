module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--bg-primary)",
          text: "var(--text-primary)"
        },
        dark: {
          DEFAULT: "var(--bg-dark)",
          text: "var(--text-dark)"
        },
        secondary: {
          DEFAULT: "var(--bg-secondary)",
          text: "var(--text-secondary)"
        },
        tertiary: {
          DEFAULT: "var(--bg-tertiary)",
          text: "var(--text-secondary)"
        },
        orange: {
          DEFAULT: "var(--bg-orange)",
          text: "var(--text-orange)"
        },
        header: {
          primary: "var(--header-bg-primary)",
          overlay: "var(--header-bg-overlay)"
        },
        chip: {
          background: "var(--chip-bg)"
        },
        custom: {
          gray: "var(--text-gray)",
          muted: "var(--text-muted)",
          light: "var(--text-light)"
        }
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};