import axios from "axios";

import { useRefreshToken, useRefreshErrorHandle } from "./Refresh";

const Interceptor = axios.create({
  timeout: 10000,
  params: {},
});

Interceptor.interceptors.request.use(useRefreshToken, useRefreshErrorHandle);

export default Interceptor;
