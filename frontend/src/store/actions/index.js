import product_actions from "./product-actions";
import search_actions from "./search-actions";
import user_actions from "./user-actions";
import history_actions from "./history-actions";

export default {
  ...product_actions,
  ...search_actions,
  ...user_actions,
  ...history_actions,
};
