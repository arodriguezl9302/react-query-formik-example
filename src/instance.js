import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    // //"Access-Control-Allow-Origin": "http://127.0.0.1:5000",
    // "Access-Control-Allow-Origin": "https://live.nexolive.net",
    // "Access-Control-Allow-Credentials": true,
    // "Access-Control-Allow-Headers":
    //   "Origin, X-Requested-With, Content-Type, Accept",
    // //"Access-Control-Allow-Origin": "*",
  },
});
