/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'link-blue': '#38bdf8',
      },
      lineHeight: {
        'header': '1.35',
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#FFF",
            a: {
              color: "#38bdf8",
              "&:hover": {
                fontWeight: "bold",
              },
            },
            h1: {
              width: "100%",
              textAlign: "center",
              color: "#FFF",
            },
            h2: {
              color: "#FFF",
            },
            h3: {
              color: "#FFF",
            },
            h4: { color: "#FFF" },
            em: { color: "#FFF" },
            strong: { color: "#FFF" },
            blockquote: { color: "#FFF" },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: "#FFF",
              backgroundColor: "#343941",
              overFlowX: "scroll",
              fontWeight: "heavy",
              borderRadius: "0.375rem",
              padding: "4px",
            },
            pre: { backgroundColor: "#343941", color: "#FFF" },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}
