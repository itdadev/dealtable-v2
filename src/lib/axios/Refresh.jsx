import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

import {
  LOCAL_STORAGE_AUTO_LOGIN,
  LOCAL_STORAGE_TOKENS,
} from "@/constants/StorageKey";
import { REFRESH_TOKEN_API_URL } from "@/constants/apiUrls";
import { useUserContext } from "@/context/AuthContext";
import { useQueryClient } from "react-query";

function LogoutUser() {
  const queryClient = useQueryClient();
  const { setIsAuthenticated } = useUserContext();

  queryClient.removeQueries("userData");

  setIsAuthenticated(false);

  localStorage.removeItem(LOCAL_STORAGE_TOKENS);
  sessionStorage.removeItem(LOCAL_STORAGE_TOKENS);
}

const useRefreshToken = async (config) => {
  const isAutoLogin =
    localStorage.getItem(LOCAL_STORAGE_AUTO_LOGIN) &&
    localStorage.getItem(LOCAL_STORAGE_AUTO_LOGIN) === "true";

  const refreshToken = isAutoLogin
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKENS)).refresh_token
    : JSON.parse(sessionStorage.getItem(LOCAL_STORAGE_TOKENS)).refresh_token;

  let token = isAutoLogin
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKENS)).access_token
    : JSON.parse(sessionStorage.getItem(LOCAL_STORAGE_TOKENS)).access_token;

  const expireAt = jwtDecode(token);

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (dayjs.unix(expireAt.exp).diff(dayjs()) < 1) {
    try {
      const res = await axios.post(REFRESH_TOKEN_API_URL, {
        refresh_token: refreshToken,
      });

      if (res.status === 400) {
        LogoutUser();

        return;
      }

      token = res.data.data;

      if (isAutoLogin) {
        localStorage.setItem(LOCAL_STORAGE_AUTO_LOGIN, "true");

        localStorage.setItem(
          LOCAL_STORAGE_TOKENS,
          JSON.stringify({
            refresh_token: refreshToken,
            access_token: token,
          }),
        );
      } else {
        localStorage.setItem(LOCAL_STORAGE_AUTO_LOGIN, "false");

        sessionStorage.setItem(
          LOCAL_STORAGE_TOKENS,
          JSON.stringify({
            refresh_token: refreshToken,
            access_token: token,
          }),
        );
      }
    } catch (error) {
      console.log(error);

      localStorage.removeItem(LOCAL_STORAGE_TOKENS);
      sessionStorage.removeItem(LOCAL_STORAGE_TOKENS);

      window.location.reload();
    }

    // 토큰 갱신 서버통신
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
};

const useRefreshErrorHandle = (err) => {
  console.log(err);

  const { logoutUser } = useUserContext();

  logoutUser();
};

export { useRefreshToken, useRefreshErrorHandle };
