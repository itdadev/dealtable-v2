/*
  NOTE: 로그인 했을 때만 접근 가능한 페이지 Outlet 작성하였습니다.
*/

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

const AuthLayout = () => {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {!isAuthenticated ? (
        <Navigate to="/login" />
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default AuthLayout;
