import Vue from "vue";
import Vuex from "vuex";

import { list, detail } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    list,
    detail,
  },
});
