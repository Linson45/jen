import axios from "axios";
import { authHeader } from "./auth-header";
import { baseURL } from "./base-url";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: authHeader(),
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    console.log("response", res);

    if (res.status === 400) {
      alert("something went wrong");
    }
    return Promise.resolve(res);
  },
  (e) => {
    console.log("error", e);
    // alert("something went wrong");

    return Promise.reject(e);
  }
);
export default axiosInstance;
