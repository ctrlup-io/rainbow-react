import { createTheme } from "@mui/material/styles";

import colors from "./colors";

const theme = {
  typography: {
    fontSize: 16,
    fontWeight: 400,
    fontWeightBold: 700,
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontSize: 48,
      fontWeight: 700,
      fontFamily: "'Cormorant Garamond', serif",
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
      fontFamily: "'Cormorant Garamond', serif",
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: "'Cormorant Garamond', serif",
    },
    h4: {
      fontSize: 20,
      fontWeight: 400,
      fontFamily: "'Montserrat', sans-serif",
    },
    h5: {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: "'Montserrat', sans-serif",
    },
    h6: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: "'Montserrat', sans-serif",
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 12,
    },
    button: {
      fontSize: 16,
      textTransform: "none",
      fontWeight: 700,
    },
    caption: {
      fontSize: 10,
    },
    overline: {
      fontSize: 10,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: colors.WHITE[50],
    },
    common: {
      white: colors.WHITE[50],
      black: colors.BLACK[800],
    },
    text: {
      primary: colors.WHITE[300],
      secondary: colors.WHITE[500],
    },
    background: {
      default: colors.BLACK[800],
      paper: colors.BLACK[900],
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 24,
          paddingLeft: 24,
        },
        contained: {
          background: colors.RAINBOW,
          color: colors.BLACK[800],
        },
        outlined: {
          borderImageSlice: 1,
          borderImageSource: colors.RAINBOW,
          borderWidth: 1,
          background: "transparent",
          color: colors.WHITE[50],
          "&:hover": {
            borderImageSlice: 1,
            borderImageSource: colors.RAINBOW,
            borderWidth: 1,
          },
        },
        text: {
          borderStyle: "solid",
          borderColor: colors.WHITE[600],
          borderWidth: 1,
          background: colors.RAINBOW,
          WebkitBackgroundClip: "text",
          MozBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozTextFillColor: "transparent",
          "&:hover": {
            borderColor: colors.WHITE[600],
            borderWidth: 1,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          background: colors.RAINBOW,
          WebkitBackgroundClip: "text",
          MozBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozTextFillColor: "transparent",
          fontWeight: 700,
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: colors.WHITE[600],
          borderWidth: 1,
          borderStyle: "solid",
          backgroundImage: "none",
        },
        outlined: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingTop: 32,
          paddingBottom: 32,
          paddingLeft: 16,
          paddingRight: 16,
        },
        title: {
          color: colors.BLACK[50],
          fontWeight: 700,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingTop: 32,
          paddingBottom: 32,
          paddingLeft: 16,
          paddingRight: 16,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          paddingTop: 32,
          paddingBottom: 32,
          paddingLeft: 16,
          paddingRight: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: colors.BLACK[300],
          backgroundColor: colors.BLACK[600],
          fontWeight: 700,
          paddingBottom: 6,
          paddingTop: 6,
          paddingLeft: 16,
          paddingRight: 16,
        },
        label: { color: colors.BLACK[50] },
        outlined: {
          borderColor: colors.WHITE[700],
          backgroundColor: colors.BLACK[800],
          fontWeight: 400,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.WHITE[300],
        },
      },
    },
  },
};

export default createTheme(theme);