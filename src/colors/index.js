export const rainbowLinearGradient = [[0, '#FB84C6'], [24, '#E3E2C3'], [48, '#A8FFC3'], [76, '#98DDFF']]

const colors = {
  RAINBOW:
    `linear-gradient(90deg${rainbowLinearGradient.map(stop => `, ${stop[1]} ${stop[0]}%`).join('')})`,
  BLACK: {
    900: "#131313",
    800: "#333333",
    700: "#515151",
    600: "#646464",
    500: "#8B8B8B",
    300: "#D1D1D1",
    50: "#F7F7F7",
  },
  WHITE: {
    700: "#75746E",
    600: "#8B8983",
    500: "#B5B3AD",
    300: "#F0EEE7",
    50: "#FFFDF6",
  },
  RED: "#FF8B92",
  ORANGE: "#FFDCA8",
  GREEN: "#98E4AD",
};



export default colors;
