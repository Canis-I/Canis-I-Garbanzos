import types from "@/store/types";

const getters = {
  [types.getActiveInfo]: (state) => {
    return state.app.product.content;
  },
};

export default getters;
