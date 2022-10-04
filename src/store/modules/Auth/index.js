import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      user: {
        id: localStorage.getItem("Speed_Dash_User_Id"),
        token: localStorage.getItem("Speed_Dash_Token"),
        usertype: localStorage.getItem("Speed_Dash_User_Type"),
        image: localStorage.getItem("Speed_Dash_userImg"),
        phone: localStorage.getItem("Speed_Dash_userPhone"),
      },
    };
  },
  mutations,
  actions,
  getters,
};
