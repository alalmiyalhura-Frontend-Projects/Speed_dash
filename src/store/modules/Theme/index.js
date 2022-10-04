import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      default_theme: "dark",
      current_theme: localStorage.getItem("Speed_Dash_Theme"),
    };
  },
  mutations,
  actions,
  getters,
};
