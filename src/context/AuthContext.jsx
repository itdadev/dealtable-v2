import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { LOCAL_STORAGE_TOKENS } from "@/constants/StorageKey";
import Interceptor from "@/lib/axios/AxiosInterceptor";
import { USER_DETAIL_API_URL } from "@/constants/apiUrls";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem(LOCAL_STORAGE_TOKENS) ||
      !!sessionStorage.getItem(LOCAL_STORAGE_TOKENS)
  );

  const getUserData = async () => {
    const response = await Interceptor?.get(USER_DETAIL_API_URL);

    return response;
  };

  const { data: userData } = useQuery(["userData"], getUserData, {
    enabled:
      !!localStorage.getItem(LOCAL_STORAGE_TOKENS) ||
      !!sessionStorage.getItem(LOCAL_STORAGE_TOKENS),
  });

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  useEffect(() => {
    if (
      localStorage.getItem(LOCAL_STORAGE_TOKENS) ||
      sessionStorage.getItem(LOCAL_STORAGE_TOKENS)
    ) {
      setIsAuthenticated(true);


    } else {
      setIsAuthenticated(false);
    }
  }, [navigate, queryClient]);

  const logoutUser = useCallback(() => {
    queryClient.removeQueries("userData");

    setIsAuthenticated(false);

    localStorage.removeItem(LOCAL_STORAGE_TOKENS);
    sessionStorage.removeItem(LOCAL_STORAGE_TOKENS);
  }, [queryClient]);

  const loginUser = useCallback(
    (data) => {
      queryClient.setQueryData("userData", data);

      setIsAuthenticated(true);
    },
    [queryClient]
  );

  const value = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    logoutUser,
    loginUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);
