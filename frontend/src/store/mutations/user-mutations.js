import types from "@/store/types";

const mutations = {
  [types.setUser]: function (state, payload) {
    Object.assign(state.users.user, payload);
  },
  [types.setLogged]: function (state, payload) {
    state.users.logged = payload;
  },
};

export default mutations;
