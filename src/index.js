import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyles from "./assets/styles/GlobalStyles";
import LibraryStyles from "./assets/styles/LibraryStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyles />

      <LibraryStyles />

      <App />
    </React.StrictMode>
  </BrowserRouter>
);
