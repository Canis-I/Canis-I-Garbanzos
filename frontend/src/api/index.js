import product_api from "./product-api";
import history_api from "./history-api";
import user_api from "./user-api";

import resources from "@/api/resources";

const calls = {
  ...product_api,
  ...history_api,
  ...user_api,
  ...resources,
};

export default calls;
