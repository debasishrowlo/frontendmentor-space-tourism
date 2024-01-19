const defaultTheme = require('tailwindcss/defaultTheme')
const globEntries = require('webpack-glob-entries-extended')

const paths = require("./paths.js")

const pxToRem = (px) => {
  const base = 16
  return px / base
}

const pxToRemString = (value) => {
  return pxToRem(value) + "rem"
}

const generateFontSize = () => {
  const fontSize = {}

  const minFontSize = 12
  const maxFontSize = 100

  let size = minFontSize
  while (size <= maxFontSize) {
    fontSize[size] = pxToRemString(size)
    size += 2
  }

  return fontSize
}

const generateBorderRadius = () => {
  const borderRadius = {}

  const minRadius = 0
  const maxRadius = 24

  let radius = minRadius
  while (radius <= maxRadius) {
    borderRadius[radius] = pxToRemString(radius),
    radius += 2
  }

  borderRadius["full"] = "9999px"

  return borderRadius
}

module.exports = {
  content: Object.values(globEntries(paths.src + "/**/*.{html,js,jsx,ts,tsx}")),
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: generateBorderRadius(),
      fontFamily: {
        "sans": ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
        "serif": ['Bellefair', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "black": "#0B0D17",
        "blue": "#D0D6F9",
        "white": "#FFFFFF",
      },
      fontSize: generateFontSize(),
      transitionDuration: { "DEFAULT": "300ms" }
    },
  },
  plugins: [],
}