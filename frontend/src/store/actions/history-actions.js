import types from "@/store/types";
import api from "@/api";

const actions = {
  [types.requestAllHistories]: async function ({ commit }) {
    const resp = await api.getAllHistories();
    if (!resp) return false;

    const d = resp.data;
    const host = "http://localhost:5000"; //window.location.origin;
    for (let i = 0; i < d.length; i++) {
      const img = await api.getImage(d[i].preview, "hist");
      commit(types.appendHistory, {
        title: d[i].name,
        file: `${d[i].file}`,
        preview: `${host}/${img.data.data}`,
      });
    }
  },
  [types.requestHistory]: async function ({ commit }, file) {
    const resp = await api.getRaw(file, "hist");

    if (!resp) return false;

    const obj = {
      data: resp.data.data,
      file: file,
    };
    commit(types.appendHistoryChunk, obj);
  },
};

export default actions;
