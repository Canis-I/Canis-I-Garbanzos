import types from "@/store/types";
import api from "@/api";

const actions = {
  [types.setActive]: function ({ commit }, location) {
    commit(types.changeActive, location);
  },
  [types.unsetActive]: function ({ commit }) {
    commit(types.changeActive, -1);
  },
  [types.requestDesc]: async function ({ commit }, id) {
    const resp = await api.getProduct(id);
    if (resp.data.status === 0) return 0;

    commit(types.changeActiveInfo, resp.data["product"]);
  },
  [types.requestCarousel]: async function ({ commit }) {
    const resp = await api.getCarousel();
    if (resp.data.status === 0) return 0;

    let tmp = [];
    resp.data["images"].forEach((e) => {
      if (e.active) tmp.push(e);
    });

    commit(types.changeCarouselImages, tmp);
  },
  [types.requestAll]: async function ({ commit }) {
    const resp = await api.getAllProducts();
    if (!resp) return false;

    const products = resp.data["products"];

    if (process.env.NODE_ENV !== "production") {
      const host = "http://localhost:8000"; //window.location.origin;
      products.map((e) => (e.image = host + e.image));
    }

    products.forEach((e) => {
      commit(types.appendProduct, e);
    });

    const cate = await api.getCategories();
    if (!cate) return false;

    const categories = cate.data["categories"];

    categories.forEach((e) => {
      commit(types.appendCategory, e);
    });
  },
  [types.clearAll]: function ({ commit }) {
    commit(types.resetProducts);
  },
};

export default actions;
