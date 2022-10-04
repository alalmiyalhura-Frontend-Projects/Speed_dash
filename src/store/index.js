import Vue from "vue";
import Vuex from "vuex";

import lang from "./modules/lang/index.js";
import sideNav from "./modules/sideNav/index.js";
import auth from "./modules/Auth/index.js";
import theme from "./modules/Theme/index.js";
import socket from "./modules/SocketGetters/index.js";
import notification from "./modules/Notifications/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lang_module: lang,
    sideNav_module: sideNav,
    auth_module: auth,
    theme_module: theme,
    socket_module: socket,
    notification_module: notification,
  },

  state() {
    return {
      resizeEventExisit: false,
    };
  },
  getters: {
    resizeEventExisit(state) {
      return state.resizeEventExisit;
    },
  },
  mutations: {
    changeRessizeEvent(state) {
      state.resizeEventExisit = !state.resizeEventExisit;
    },
    // buttonsTEST(){
    //   if (document.getElementsByClassName("btn_loader").length != 0) {
    //     const collection = document.getElementsByClassName("button_style_1");
    //     collection[0].setAttribute("disabled", "true");
    //   }
    // }
  },
  actions: {},
  
});
