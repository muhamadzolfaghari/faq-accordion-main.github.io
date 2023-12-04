import React from "react";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./lib/theme.const.ts";
import RTL, { shadowRootElement } from "./components/RTL.tsx";
import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(shadowRootElement).render(
  <React.StrictMode>
    <RTL>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </RTL>
  </React.StrictMode>,
);
