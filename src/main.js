// ======== core Vue
import Vue from "vue";

// ======== Main app
import App from "./App.vue";

// ======== Router
import router from "./router";

// ======== Store
import store from "./store";

// ======== Mixins
import helpers from "./globalHelpers";
Vue.mixin(helpers);

// ======== language
store.dispatch("lang_module/handleLang"); // ==> Store (Vuex) <==
store.dispatch("theme_module/handleTheme"); // ==> Store (Vuex) <==

// ========  Start Axios
import axios from "axios";
Vue.prototype.$axios = axios; // Glopal variable

// **** CONSTS
const USER_TOKEN = store.getters["auth_module/currentUser"].token;
const CURRENT_LANG = store.getters["lang_module/lang"];

// Global headers
axios.defaults.baseURL = "https://speed4ever.elsaed.aait-d.com/dashboard/"; // baseurl
axios.defaults.headers.common["cache-control"] = "no-cache";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Accept-language"] = CURRENT_LANG;
axios.defaults.headers.common["lang"] = CURRENT_LANG;
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
axios.defaults.headers.common["timezone"] = timezone;

// Set Token If Exists
if (USER_TOKEN) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + USER_TOKEN;
}
// ========  End Axios

// ======== Bootstrap
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
Vue.use(BootstrapVue);

// ======== iziToast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
Vue.prototype.$iziToast = iziToast; // Glopal variable
Vue.use(iziToast);

// ======== Moment
const moment = require("moment");
if (CURRENT_LANG == "ar") {
  require("moment/locale/ar");
}
Vue.use(require("vue-moment"), {
  moment,
});

// ======== AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// ======== i18n
import i18n from "./i18n";

// ======= vuetify
import vuetify from "./plugins/vuetify";

// =============> Vue Slike Carousal
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
Vue.component("vue-slick", VueSlickCarousel);

// =============> Multiselect
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
Vue.component("multiselect", Multiselect);

// ========  Main Style
import "./assets/scss/main.scss";

// =============> Google Maps
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: "AIzaSyDRymdCLWxCwLHFnwv36iieKAMjiwk8sdc",
    libraries: "places", // This is required if you use the Auto complete plug-in
  },
});

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

// ============> Ckeditor
import CKEditor from "ckeditor4-vue";
Vue.use(CKEditor);
// ============> VueParticles
import VueParticles from "vue-particles";
Vue.use(VueParticles);

// ==== Import Globbal Components
import Breadcrumb from "./components/Global/Breadcrumb.vue";
import BaseModel from "./components/ui/BaseModel.vue";
import UplodeImage2 from "./components/Uploads/UplodeImage2.vue";
import UplodeImage from "./components/Uploads/UplodeImage.vue";
import UplodeMultiple from "./components/Uploads/UplodeMultiple.vue";
import StatsCard from "./components/Charts/ChartComponent.vue";
import ProfileCard from "./components/Global/ProfileCard.vue";
import BaseCard from "./components/ui/BaseCard.vue";

// ==== Register Globbal Components
Vue.component("Breadcrumb", Breadcrumb);
Vue.component("profile-card", ProfileCard);
Vue.component("base-model", BaseModel);
Vue.component("uplode-image-2", UplodeImage2);
Vue.component("uplode-image", UplodeImage);
Vue.component("uplode-multiple", UplodeMultiple);
Vue.component("stats-card", StatsCard);
Vue.component("base-card", BaseCard);

// ======== Attatch and Mount
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
