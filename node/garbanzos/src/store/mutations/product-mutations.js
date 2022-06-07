import types from "@/store/types";

const internal = {
  [types.changeActive]: function (state, payload) {
    state.app.active = payload;
  },
  [types.changeActiveInfo]: function (state, payload) {
    state.products.active = payload;
  },
  [types.changeCarouselImages]: function (state, payload) {
    state.carousel = payload;
  },
};

const external = {
  [types.appendProduct]: function (state, payload) {
    state.app.products.push(payload);
  },
  [types.appendCategory]: function (state, payload) {
    state.app.categories.push(payload);
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
