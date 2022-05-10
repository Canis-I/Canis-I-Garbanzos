export const setActive = "setActive";
export const unsetActive = "unsetActive";

export const requestAll = "requestAll";
export const requestDesc = "requestDesc";
export const clearAll = "clearAll";

//MUTATIONS
export const changeActive = "changeActive";
export const appendProduct = "appendProduct";
export const resetProducts = "resetProducts";
export const changeActiveInfo = "changeActiveInfo";

//GETTERS
export const getActiveInfo = "getActiveInfo";

const actions = {
  setActive,
  unsetActive,
  requestDesc,
  requestAll,
  clearAll,
};

const mutations = {
  changeActive,
  appendProduct,
  resetProducts,
  changeActiveInfo,
};

const getters = {
  getActiveInfo,
};

const types = {
  ...actions,
  ...mutations,
  ...getters,
};

export default types;
