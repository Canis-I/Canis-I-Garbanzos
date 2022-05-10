import types from "@/store/types";

const internal = {
  [types.appendHistoryChunk]: function (state, payload) {
    state.histories.active.push(payload);
  },
};

const external = {
  [types.appendHistory]: function (state, payload) {
    state.app.histories.push(payload);
  },
  [types.clearHistories]: function (state) {
    state.app.histories = [];
  },
};

const mutations = {
  ...internal,
  ...external,
};

export default mutations;
