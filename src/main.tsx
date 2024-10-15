import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";
import "./index.css";
import LoadingContextProvider from "./contexts/LoadingContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadingContextProvider>
      <App />
    </LoadingContextProvider>
  </StrictMode>
);
