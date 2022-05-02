import React, { StrictMode } from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
