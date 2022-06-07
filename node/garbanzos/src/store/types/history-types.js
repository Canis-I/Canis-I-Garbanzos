export const requestAllHistories = "requestAllHistories";
export const requestHistory = "requestHistory";

export const appendHistory = "appendHistory";
export const clearHistories = "clearHistories";
export const appendHistoryChunk = "appendHistoryChunk";

export const getHistoryByName = "getHistoryByName";
export const getHistoryByIndex = "getHistoryByIndex";

const actions = {
  requestAllHistories,
  requestHistory,
};
const mutations = {
  appendHistory,
  clearHistories,
  appendHistoryChunk,
};
const getters = {
  getHistoryByName,
  getHistoryByIndex,
};

const types = {
  ...actions,
  ...mutations,
  ...getters,
};

export default types;
