//ACTIONS
export const setSearchParameters = "setSearchParameters";
export const cleanSearch = "cleanSearch";

//MUTATIONS
export const changeSearchParameters = "changeSearchParameters";

const actions = {
  setSearchParameters,
  cleanSearch,
};

const mutations = {
  changeSearchParameters,
};

const types = {
  ...actions,
  ...mutations,
};

export default types;
