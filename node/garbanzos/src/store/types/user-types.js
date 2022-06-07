export const changeUserInfo = "changeUserInfo";
const actions = {
  changeUserInfo,
};

export const setUser = "setUser";
export const setLogged = "setLogged";
const mutations = {
  setUser,
  setLogged,
};

const types = {
  ...actions,
  ...mutations,
};

export default types;
