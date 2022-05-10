import product_mutations from "./product-mutations";
import search_mutations from "./search-mutations";
import user_mutations from "./user-mutations";
import history_mutations from "./history-mutations";

export default {
  ...product_mutations,
  ...search_mutations,
  ...user_mutations,
  ...history_mutations,
};
