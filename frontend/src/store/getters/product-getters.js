import types from "@/store/types";

const getters = {
  [types.getActiveInfo]: (state) => (id) => {
    console.debug(state.app.products["0"]);

    const index = state.app.products.findIndex((e) => {
      console.debug(e);
      return e.id === id;
    });

    const v = state.app.products[index];
    console.debug(v);
    return v;
  },
};

export default getters;
