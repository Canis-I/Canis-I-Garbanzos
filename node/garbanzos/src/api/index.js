import axios from "axios";

import product_api from "@/api/product-api";

const calls = {
  ...product_api,
};

if (process.env.NODE_ENV !== "production")
  axios.defaults.baseURL = "http://localhost:8000";

export default calls;
