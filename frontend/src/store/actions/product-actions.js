import types from "@/store/types";
import api from "@/api";

const actions = {
  [types.setActive]: function ({ commit }, location) {
    commit(types.changeActive, location);
  },
  [types.unsetActive]: function ({ commit }) {
    commit(types.changeActive, -1);
  },
  [types.requestDesc]: async function ({ commit }, uri) {
    const resp = await api.getRaw(uri, "prod");
    if (resp.data.status === 0) return 0;

    commit(types.changeActiveInfo, resp.data.data);
  },
  [types.requestAll]: async function ({ commit }) {
    const resp = await api.getAllProducts();
    const origin = "prod";
    if (!resp) return false;

    const d = resp.data;
    const host = "http://localhost:8000"; //window.location.origin;
    for (let i = 0; i < d.length; i++) {
      const img = await api.getImage(d[i].preview, origin);

      commit(types.appendProduct, {
        title: d[i].name,
        price: d[i].price,
        image: `${host}/${img.data.data}`,
        content: d[i].desc,
      });
    }
  },
  [types.clearAll]: function ({ commit }) {
    commit(types.resetProducts);
  },
};

export default actions;
