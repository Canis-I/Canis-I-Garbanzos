export const setActive = "setActive";
export const unsetActive = "unsetActive";

export const requestAll = "requestAll";
export const requestCategories = "requestCategories";
export const requestDesc = "requestDesc";
export const requestCarousel = "requestCarousel";
export const clearAll = "clearAll";

//MUTATIONS
export const changeActive = "changeActive";
export const appendProduct = "appendProduct";
export const appendCategory = "appendCategory";
export const resetProducts = "resetProducts";
export const changeActiveInfo = "changeActiveInfo";
export const changeCarouselImages = "changeCarouselImages";

//GETTERS
export const getActiveInfo = "getActiveInfo";

const actions = {
  setActive,
  unsetActive,
  requestDesc,
  requestAll,
  requestCarousel,
  clearAll,
  requestCategories,
};

const mutations = {
  changeActive,
  appendProduct,
  resetProducts,
  changeActiveInfo,
  changeCarouselImages,
  appendCategory,
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
