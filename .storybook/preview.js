import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import theme from "../src/theme";

const muiTheme = createTheme(theme);

export const decorators = [
  (Story) => (
    <EmotionThemeProvider theme={muiTheme}>
      <MuiThemeProvider theme={muiTheme}>{Story()}</MuiThemeProvider>
    </EmotionThemeProvider>
  ),
  (Story) => (
    <Box
      sx={{
        background: muiTheme.palette.background.default,
        padding: muiTheme.spacing(2),
      }}
    >
      {Story()}
    </Box>
  ),
];

export const parameters = {
  options: {
    storySort: {
      order: ["Colors", "Fonts", "Theme", "Icons"],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [{ name: "dark", value: muiTheme.palette.background.default }],
  },
};
