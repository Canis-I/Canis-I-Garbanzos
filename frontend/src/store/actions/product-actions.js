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
  [types.requestAll]: async function ({ commit }) {
    const resp = await api.getAllProducts();
    if (!resp) return false;

    const products = resp.data["products"];
    const host = "http://localhost:8000"; //window.location.origin;
    for (let i = 0; i < products.length; i++) {
      commit(types.appendProduct, {
        id: products[i].id,
        title: products[i].title,
        price: products[i].price,
        image: host + products[i].image,
        content: products[i].detail,
        category: products[i].category,
      });
    }
  },
  [types.clearAll]: function ({ commit }) {
    commit(types.resetProducts);
  },
};

export default actions;
