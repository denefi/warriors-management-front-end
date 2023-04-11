import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProviderWrapper } from "./context/Auth.context";
import { ThemeProviderWrapper } from "./context/theme.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
        <AuthProviderWrapper>
          <App />
        </AuthProviderWrapper>
      </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
