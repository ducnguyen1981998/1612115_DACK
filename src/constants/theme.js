const themes={
  light:{
    colorprimary: '#0060df', //button
    colorsecondary: '#ffffff', //label
    coloraccent: '#fd6f53',
    fontcolor: '#000000', //text
    fontcolorSub:'#798f7f',
    fontcolor1: '#ffffff',
    colorthird: '#d3dae3'
  },
  dark:{
    colorprimary: '#432577',
    colorsecondary: '#243133',
    coloraccent: '#12cdea',
    fontcolor: '#ffffff',
    fontcolorSub:'#0c1f11',
    fontcolor1: '#000000',
    colorthird: '#3e3e3e'
  }
};

const colors = {
  accent: "#F3534A",
  primary: "#0AC4BA",
  secondary: "#2BDA8E",
  tertiary: "#FFE358",
  black: "#323643",
  white: "#FFFFFF",
  gray: "#9DA3B4",
  gray2: "#C5CCD6"
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12
};

const fonts = {
  h1: {
    fontSize: sizes.h1
  },
  h2: {
    fontSize: sizes.h2
  },
  h3: {
    fontSize: sizes.h3
  },
  header: {
    fontSize: sizes.header
  },
  title: {
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption
  }
};

export { colors, sizes, fonts, themes };
