import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "react-query/devtools";
import { IntlProvider } from "react-intl";

import { LOCAL_STORAGE_SITE_LANGUAGE } from "@/constants/StorageKey";

import App from "./App";
import GlobalStyles from "./assets/styles/GlobalStyles";
import LibraryStyles from "./assets/styles/LibraryStyles";
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";
import enUsMsg from "./util/language-setting/languages/en-US.json";
import koMsg from "./util/language-setting/languages/ko.json";

const root = ReactDOM.createRoot(document.getElementById("root"));

const lang = localStorage.getItem(LOCAL_STORAGE_SITE_LANGUAGE);

const messages = { "en-US": enUsMsg, ko: koMsg }[lang];

root.render(
  <BrowserRouter>
    <QueryProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />

      <IntlProvider locale={lang} messages={messages}>
        <AuthProvider>
          <GlobalStyles />

          <LibraryStyles />

          <App />
        </AuthProvider>
      </IntlProvider>
    </QueryProvider>
  </BrowserRouter>,
);
