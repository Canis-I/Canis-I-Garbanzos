import types from "@/store/types";

const internal = {
  [types.changeActive]: function (state, payload) {
    state.app.active = payload;
  },
  [types.changeActiveInfo]: function (state, payload) {
    state.app.product.content = payload;
  },
};

const external = {
  [types.appendProduct]: function (state, payload) {
    state.app.products.push(payload);
  },
  [types.resetProducts]: function (state) {
    state.app.products = [];
  },
};

const mutations = {
  ...internal,
  ...external,
};
export default mutations;
