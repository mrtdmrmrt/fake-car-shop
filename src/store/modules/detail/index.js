import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

export const detail = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
