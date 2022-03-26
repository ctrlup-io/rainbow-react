import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";

import Rainbow from "../Rainbow";

export default function ThemeProvider({ theme, children }) {
  return (
    <EmotionThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <Box position="absolute" height={0} width={0} overflow="hidden">
          <Rainbow />
        </Box>
      </MuiThemeProvider>
    </EmotionThemeProvider>
  );
}
