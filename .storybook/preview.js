import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { Box } from "@mui/material";

import theme from "../src/theme";

export const decorators = [
  (Story) => (
    <EmotionThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>{Story()}</MuiThemeProvider>
    </EmotionThemeProvider>
  ),
  (Story) => (
    <Box
      sx={{
        background: theme.palette.background.default,
        padding: theme.spacing(2),
      }}
    >
      {Story()}
    </Box>
  ),
];

export const parameters = {
  options: {
    storySort: {
      order: ["Colors", "Fonts", "Theme"],
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
    values: [{ name: "dark", value: theme.palette.background.default }],
  },
};
