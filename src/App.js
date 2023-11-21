import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { AntdTheme } from "./lib/antd/AntdCustomTheme";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AppTheme from "./theme";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

import { Home } from "./_root/pages/home";
import { Account } from "./_auth/pages";

import { ConfigProvider } from "antd";

// fullpage.js : https://github.com/alvarotrigo/fullPage.js
<link rel="stylesheet" type="text/css" href="fullpage.css" />;

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <ConfigProvider theme={AntdTheme}>
        <Routes>
          <Route element={<AuthLayout />}>
            {/* Private Routes */}
            <Route path="/account" element={<Account />} />
          </Route>

          <Route element={<RootLayout />}>
            {/* Public Routes */}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
