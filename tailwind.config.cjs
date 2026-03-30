/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import scrollbar from "tailwind-scrollbar";
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
'nvim-bg': '#0f0f10',
'nvim-fg': '#00d7ff',
        'nvim-gray': '#4e4e4e',
        'blue': '#5fafd7',
        'green': '#87d787',
        'nvim-statusline': '#303030',
        skin: {
          hue: withOpacity("--color"),
          muted: withOpacity("--muted"),
        },
        nvim: {
          blue: withOpacity("--color-nvim-blue"),
          green: withOpacity("--color-nvim-green"),
        }
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
        },
        nvim: {
          green: withOpacity("--color-nvim-green"),
          blue: withOpacity("--color-nvim-blue"),
        }
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          "button-accent": withOpacity("--color-button-accent"),
          "button-accent-hover": withOpacity("--color-button-accent-hover"),
          "button-muted": withOpacity("--color-button-muted"),
        },
      },
      ringColor: {
        skin: {
          fill: withOpacity("--color-fill"),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity("--color-fill"),
        },
      },
    fontFamily: {
      sans: ["Poppins", "Montserrat", "sans-serif"],
      mono: ["Poppins", "sans-serif"], // reemplaza JetBrains Mono
    },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    daisyui,
    scrollbar,
  ],
};