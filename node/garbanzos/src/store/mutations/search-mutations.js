import types from "@/store/types";

const externalMutations = {
  /**
   * @param state: object
   * @param [object] payload
   */
  [types.changeSearchParameters]: function (state, payload) {
    Object.assign(state.app.search, payload);
  },
};

const internalMutations = {};

const sMutations = {
  ...externalMutations,
  ...internalMutations,
};

export default sMutations;
