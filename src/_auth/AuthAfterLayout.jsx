import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

const AuthAfterLayout = () => {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/need" />
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default AuthAfterLayout;
