import axios from "axios";
import { useAuthStore } from "./store";
import { isTokenValid } from "./verifyToken";

//const logout = useAuthStore((state) => state.logout);

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${useAuthStore.getState().token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//   (response) =>
//     new Promise((resolve, reject) => {
//       resolve(response);
//     }),
//   (error) => {
//     if (!error.response) {
//       new Promise((resolve, reject) => {
//         resolve(response);
//       });
//     }

//     if (error.response.status === 401 || error.response.status === 403) {
//       //logout();
//       alert("no permitido");
//     } else {
//       new Promise((resolve, reject) => {
//         resolve(response);
//       });
//     }
//   }
// );

export default api;
