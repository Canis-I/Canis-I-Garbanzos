import types from "@/store/types";

const getters = {
  [types.getActiveInfo]: (state) => (id) => {
    const index = state.app.products.findIndex((e) => {
      return e.id === id;
    });

    return state.app.products[index];
  },
};

export default getters;
