import types from "@/store/types";

const getters = {
  [types.getHistoryByIndex]: (state) => (index) => {
    return state.histories.active[index];
  },
  [types.getHistoryByName]: (state) => (name) => {
    const index = state.histories.active.findIndex((e) => e.file === name);
    return state.histories.active[index];
  },
};

export default getters;
