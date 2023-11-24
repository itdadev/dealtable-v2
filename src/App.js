import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { ConfigProvider } from "antd";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AppTheme from "./theme";

import AuthLayout from "./_auth/AuthLayout";
import AuthAfterLayout from "./_auth/AuthAfterLayout";
import RootLayout from "./_root/RootLayout";
import { AntdTheme } from "./lib/antd/AntdCustomTheme";

import { Home } from "./_root/pages/home";

import {
  ChangePassword,
  FindAccount,
  FindAccountFail,
  Join,
  JoinComplete,
  Login,
} from "./_root/pages/user";
import { AddNeed, AddNeedComplete, Need } from "./_root/pages/need";
import {
  Account,
  ChangeMyPassword,
  DeleteAccount,
} from "./_auth/pages/account";
import { Faq } from "./_root/pages/faq";
import { Notice } from "./_root/pages/notice";

// fullpage.js : https://github.com/alvarotrigo/fullPage.js
<link rel="stylesheet" type="text/css" href="fullpage.css" />;

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <ConfigProvider theme={AntdTheme}>
        <Routes>
          <Route element={<AuthLayout />}>
            {/* Private Routes - only accessible after login */}
            <Route path="/account" element={<Account />} />
            <Route path="/change-account" element={<Account edit />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/change-my-password" element={<ChangeMyPassword />} />

            <Route path="/need" element={<Need />} />
            <Route path="/need/add" element={<AddNeed />} />
            <Route path="/need/edit/:needsKey" element={<AddNeed />} />
            <Route path="/need/add-complete" element={<AddNeedComplete />} />
          </Route>

          {/* Public Routes - not accessible after login */}
          <Route element={<AuthAfterLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/join-complete" element={<JoinComplete />} />
            <Route path="/find-account" element={<FindAccount />} />
            <Route path="/find-account-fail" element={<FindAccountFail />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>

          <Route element={<RootLayout />}>
            {/* Public Routes */}
            <Route index element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/notice" element={<Notice />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
