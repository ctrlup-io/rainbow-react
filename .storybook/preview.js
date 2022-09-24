import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { theme, Rainbow } from "../src";

const muiTheme = createTheme(theme);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {Story()}
      <Rainbow />
    </ThemeProvider>
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
    expanded: false,
  },
  backgrounds: {
    default: "dark",
    values: [{ name: "dark", value: muiTheme.palette.background.default }],
  },
};
