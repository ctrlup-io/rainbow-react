import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import Rainbow from "../Rainbow";

export default function ThemeProvider({ theme, children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <Rainbow />
    </MuiThemeProvider>
  );
}
