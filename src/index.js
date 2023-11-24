import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./App";
import GlobalStyles from "./assets/styles/GlobalStyles";
import LibraryStyles from "./assets/styles/LibraryStyles";
import AuthProvider from "./context/AuthContext";

import { QueryProvider } from "./lib/react-query/QueryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <QueryProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />

      <AuthProvider>
        <GlobalStyles />

        <LibraryStyles />

        <App />
      </AuthProvider>
    </QueryProvider>
  </BrowserRouter>
);
