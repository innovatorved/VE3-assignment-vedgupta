import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import App from "./App";

import PageState from "./context/PagesStateManager";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageState>
      <App />
    </PageState>
  </React.StrictMode>
);

reportWebVitals();
