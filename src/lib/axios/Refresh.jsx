import axios from "axios";
import moment from "moment";
import { jwtDecode } from "jwt-decode";

import {
  LOCAL_STORAGE_AUTO_LOGIN,
  LOCAL_STORAGE_TOKENS,
} from "@/constants/StorageKey";
import { refreshTokenUrl } from "@/constants/apiUrls";
import { useUserContext } from "@/context/AuthContext";

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
  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    const body = {
      refreshToken,
    };

    // 토큰 갱신 서버통신
    const { data } = await axios.post(refreshTokenUrl, body);

    token = data.data;

    if (isAutoLogin) {
      localStorage.setItem(LOCAL_STORAGE_AUTO_LOGIN, true);
      localStorage.setItem(
        LOCAL_STORAGE_TOKENS,
        JSON.stringify({
          refresh_token: refreshToken,
          access_token: data.data,
        })
      );
    } else {
      localStorage.setItem(LOCAL_STORAGE_AUTO_LOGIN, false);
      sessionStorage.setItem(
        LOCAL_STORAGE_TOKENS,
        JSON.stringify({
          refresh_token: refreshToken,
          access_token: data.data,
        })
      );
    }
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
};

const useRefreshErrorHandle = (err) => {
  const { logoutUser } = useUserContext();

  logoutUser();
};

export { useRefreshToken, useRefreshErrorHandle };
