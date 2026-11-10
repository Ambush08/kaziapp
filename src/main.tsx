import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalState } from "./context/globalState.tsx";
import AuthProvider from "./context/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <GlobalState>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </GlobalState>,
);
