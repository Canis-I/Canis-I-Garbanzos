import types from "@/store/types";

const actions = {
  [types.setSearchParameters]: function ({ commit }, keyword) {
    commit(types.changeSearchParameters, {
      keyword: keyword,
      indexes: [],
      average: -1,
    });
  },
  [types.cleanSearch]: function ({ commit }) {
    commit(types.changeSearchParameters, {
      keyword: "",
      indexes: [],
      average: -1,
    });
  },
};

export default actions;
