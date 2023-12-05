import React from "react";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./lib/theme.const.ts";
import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import { QueryClient } from "react-query";

createRoot(document.querySelector("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
