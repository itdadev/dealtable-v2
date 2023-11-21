import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/components/shared";

const RootLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
