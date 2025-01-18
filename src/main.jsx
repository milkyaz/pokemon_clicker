import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./index.css";

const theme = createTheme({
  typography: {},
});

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  /* </StrictMode> */
);
