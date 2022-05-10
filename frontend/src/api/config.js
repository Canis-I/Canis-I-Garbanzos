import axios from "axios";

if (process.env.NODE_ENV !== "production")
  axios.defaults.baseURL = "http://192.168.1.241:5000";

export default axios;
