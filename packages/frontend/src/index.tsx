import "nes.css/css/nes.min.css";

import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import store from "./store";

const root = document.getElementById("root");

if (!root) {
  throw new Error("React root not found");
}

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
