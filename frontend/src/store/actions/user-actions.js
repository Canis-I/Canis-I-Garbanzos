import types from "@/store/types";

const actions = {
  [types.changeUserInfo]: function ({ commit }, user) {
    commit(types.setUser, user);
  },
};

export default actions;
