import user_types from "./user-types";
import history_types from "./history-types";
import product_types from "./product-types";
import search_types from "./search-types";

export default {
  ...product_types,
  ...user_types,
  ...history_types,
  ...search_types,
};
