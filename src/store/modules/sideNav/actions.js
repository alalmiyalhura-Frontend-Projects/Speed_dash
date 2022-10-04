import router from "../../../router/index";

export default {
  onResize(context) {
    context.dispatch("calcSideBarWidth");
    context.dispatch("changeBodyPadding", context.getters.isSmallScreen);
    context.dispatch("changeNavBarWidth", context.getters.isSmallScreen);
    context.commit("onResize");
  },

  calcSideBarWidth(context) {
    if (!context.getters.isSmallScreen) {
      const sideBarWidth = document.querySelector(".main_sidebar").clientWidth;
      context.commit("calcSideBarWidth", sideBarWidth);
    }
  },

  changeBodyPadding(context, payload) {
    let lang = context.rootGetters["lang_module/lang"];
    const body = document.querySelector("body");

    body.style.paddingTop = "100px";

    if (router.app._route.name == "Login") {
      body.style.padding = "0";
    } else {
      if (lang == "ar") {
        body.style.paddingLeft = "20px";
      } else {
        body.style.paddingRight = "20px";
      }

      if (payload == false) {
        context.dispatch("calcSideBarWidth");

        if (lang == "ar") {
          body.style.paddingRight = context.getters.sideBarWidth + 20 + "px";
        } else {
          body.style.paddingLeft = context.getters.sideBarWidth + 20 + "px";
        }
      } else {
        if (context.getters.isSmallScreen) {
          body.style.paddingRight = "5px";
          body.style.paddingLeft = "5px";
        } else {
          body.style.paddingRight = "20px";
        }
      }
    }
  },

  changeNavBarWidth(context, payload) {
    const navbar = document.querySelector(".main_nav");

    if (payload == false) {
      context.dispatch("calcSideBarWidth");
      navbar.style.width = `calc(100% - ( 20px + ${
        context.getters.sideBarWidth + 20
      }px))`;
    } else {
      navbar.style.width = `calc(100% - ( 90px + 20px))`;
    }
  },

  // ============> No mutations
  reseatBodyPadding() {
    const body = document.querySelector("body");
    body.style.padding = "0";
  },

  disableNavSide() {
    const sideBar = document.querySelector(".main_sidebar");
    sideBar.style.display = "none";

    const navbar = document.querySelector(".main_nav");
    navbar.style.display = "none";
  },
};
