import Vue from "vue";
import VueRouter from "vue-router";

// ============================== Start Views ==============================
import Home from "../views/Home.vue"; // Home

// ********** Children
import HomePage from "../views/children/HomePage.vue";

// ========== Start HomePage ==========
import HomeScreenHome from "../views/children/HomePage/Home.vue";

// **** Start Home Filters
import homeFiltersHome from "../views/children/HomePage/HomeFilters/Home.vue";
// Show All
import AllFilters from "../views/children/HomePage/HomeFilters/ShowAll.vue";
// Add
import AddFilter from "../views/children/HomePage/HomeFilters/Add.vue";
// Edit
import EditFilter from "../views/children/HomePage/HomeFilters/Edit.vue";
// **** End Home Filters

// **** Start Sub_Category
import SubCategory from "../views/children/HomePage/SubCategories/Home.vue";
// Show All
import AllSubCategories from "../views/children/HomePage/SubCategories/ShowAll.vue";
// Add
import AddSubCategory from "../views/children/HomePage/SubCategories/Add.vue";
// Edit
import EditSubCategory from "../views/children/HomePage/SubCategories/Edit.vue";
// **** End Sub_Category

// **** Start NewCollection
import NewCollectionHome from "../views/children/HomePage/NewCollection/Home.vue";
// Show All
import AllNewCollection from "../views/children/HomePage/NewCollection/ShowAll.vue";
// Add
import AddNewCollection from "../views/children/HomePage/NewCollection/Add.vue";
// Edit
import EditNewCollection from "../views/children/HomePage/NewCollection/Edit.vue";
// **** End NewCollection
// ========== End HomePage ==========

// ========== Start Main Slider ==========
import SlidersHome from "../views/children/MainSlider/Home.vue";
// Show All
import AllSliders from "../views/children/MainSlider/ShowAll.vue";
// Add
import AddSlider from "../views/children/MainSlider/Add.vue";
// Edit
import EditSlider from "../views/children/MainSlider/Edit.vue";
// ========== End Main Slider ==========

// ========== Start Countries ==========
import CountriesHome from "../views/children/Countries/Home.vue";
// Show All
import AllCountries from "../views/children/Countries/ShowAll.vue";
// Add
import AddCountry from "../views/children/Countries/Add.vue";
// Edit
import EditCountry from "../views/children/Countries/Edit.vue";
// ========== End Countries ==========

// ========== Start Cities ==========
import CitiesHome from "../views/children/Cities/Home.vue";
// Show All
import AllCities from "../views/children/Cities/ShowAll.vue";
// Add
import AddCity from "../views/children/Cities/Add.vue";
// Edit
import EditCity from "../views/children/Cities/Edit.vue";
// ========== End Cities ==========

// ========== Start Ades ==========
import AdesHome from "../views/children/Ades/Home.vue";
// Show All
import AllAdes from "../views/children/Ades/ShowAll.vue";
// Show Single
import ShowAd from "../views/children/Ades/Show.vue";
// Add
import AddAde from "../views/children/Ades/Add.vue";
// Edit
import EditAde from "../views/children/Ades/Edit.vue";
// ========== End Ades ==========

// ========== Start Permissions ==========
import PermissionsHome from "../views/children/Permissions/Home.vue";
// Show All
import AllPermissions from "../views/children/Permissions/ShowAll.vue";
// Add
import AddPermission from "../views/children/Permissions/Add.vue";
// Edit
import EditPermission from "../views/children/Permissions/Edit.vue";
// ========== End Permissions ==========

// ========== Start FAQS ==========
import FaqsHome from "../views/children/Faqs/Home.vue";
import Faqs from "../views/children/Faqs/ShowAll.vue";
import AddFaq from "../views/children/Faqs/Add.vue";
import EditFaq from "../views/children/Faqs/Edit.vue";
// ========== End FAQS ==========

// ========== Start Settings ==========
import SettingsHome from "../views/children/Settings/Home.vue";
// ABOUT
import AboutUsHome from "../views/children/Settings/AboutUs/Home.vue";
import AboutShow from "../views/children/Settings/AboutUs/Show.vue";
import EditAbout from "../views/children/Settings/AboutUs/Edit.vue";
// POLICY
import PolicyHome from "../views/children/Settings/Terms/Home.vue";
import PolicyShow from "../views/children/Settings/Policy/Show.vue";
import EditPolicy from "../views/children/Settings/Policy/Edit.vue";
// TERMS
import TermsHome from "../views/children/Settings/Terms/Home.vue";
import TermsShow from "../views/children/Settings/Terms/Show.vue";
import EditTerms from "../views/children/Settings/Terms/Edit.vue";
// CONTACT US
import ContactHome from "../views/children/Settings/ContactUs/Home.vue";
import ContactShow from "../views/children/Settings/ContactUs/Show.vue";
import EditContact from "../views/children/Settings/ContactUs/Edit.vue";
// ========== End Settings ==========

// ========== Start PROMO CODE ==========
import PromoCode from "../views/children/PromoCode/Home.vue";
// Show All
import AllPromoCode from "../views/children/PromoCode/ShowAll.vue";
// Add
import AddPromoCode from "../views/children/PromoCode/Add.vue";
// Edit
import EditPromoCode from "../views/children/PromoCode/Edit.vue";
// ========== End PROMO CODE ==========

// ========== Start NOTIFICATIONS ==========
import Notifications from "../views/children/Notifications/Home.vue";
import showNotifications from "../views/children/Notifications/Show.vue";
// Show All
import AllNotifications from "../views/children/Notifications/ShowAll.vue";
// Add
import AddNotifications from "../views/children/Notifications/Add.vue";
// ========== End NOTIFICATIONS ==========

// ========== Start STATUS ==========
import Status from "../views/children/Status/Home.vue";
// Show All
import AllStatus from "../views/children/Status/ShowAll.vue";
// Add
import AddStatus from "../views/children/Status/Add.vue";
// Edit
import EditStatus from "../views/children/Status/Edit.vue";
// ========== Start STATUS ==========

// ========== Start SHIPPING ==========
import Shipping from "../views/children/Shipping/Home.vue";
// Show All
import AllShipping from "../views/children/Shipping/ShowAll.vue";
// Add
import AddShipping from "../views/children/Shipping/Add.vue";
// Edit
import EditShipping from "../views/children/Shipping/Edit.vue";
// ========== End SHIPPING ==========

// ========== Start Packages ==========
import Packages from "../views/children/Packages/Home.vue";
// Show All
import AllPackages from "../views/children/Packages/ShowAll.vue";
// Add
import AddPackage from "../views/children/Packages/Add.vue";
// Edit
import EditPackage from "../views/children/Packages/Edit.vue";
// ========== End Packages ==========

// ========== Start Admins ==========
// Crud
import AdminHome from "../views/children/Admins/Home.vue";
import AllAdmins from "../views/children/Admins/ShowAll.vue";
import AddAdmin from "../views/children/Admins/Add.vue";
import EditAdmin from "../views/children/Admins/Edit.vue";
// Profile
import AdminShowHome from "../views/children/Admins/AdminProfile/AdminShowHome.vue";
import Cards from "../views/children/Admins/AdminProfile/children/Cards.vue";
import PersonalData from "../views/children/Admins/AdminProfile/children/PersonalData.vue";
// ========== End Admins ==========

// ========== Start Clients ==========
// Crud
import ClientHome from "../views/children/Clients/Home.vue";
import AllClients from "../views/children/Clients/ShowAll.vue";
import AddClient from "../views/children/Clients/Add.vue";
import EditClient from "../views/children/Clients/Edit.vue";
// Profile
import ClientShowHome from "../views/children/Clients/AdminProfile/ClientShowHome.vue";
import ClientCards from "../views/children/Clients/AdminProfile/children/Cards.vue";
import ClientPersonalData from "../views/children/Clients/AdminProfile/children/PersonalData.vue";
// ========== End Clients ==========

// ********** Auth
import Login from "../views/Auth/Login.vue";

// ********** NotFound
import NotFound from "../views/NotFound.vue";

// ============================== End Views ==============================

// Vuex store
import store from "../store/index";
let router = null;
window.rootRouter = router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    // Main
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "/",
          name: "HomePage",
          component: HomePage,
        },

        // ========== Start HomePage ==========
        {
          path: "/home_screen",
          component: HomeScreenHome,
          children: [
            // NewCollection
            {
              path: "newCollection",
              component: NewCollectionHome,
              children: [
                // Show All
                {
                  path: "",
                  name: "AllNewCollection",
                  component: AllNewCollection,
                },
                // Add
                {
                  path: "add",
                  name: "AddNewCollection",
                  component: AddNewCollection,
                },
                // Edit
                {
                  path: "edit/:id",
                  name: "EditNewCollectionr",
                  component: EditNewCollection,
                  props: true,
                },
              ],
            },

            // Home filter
            {
              path: "homeFilters",
              component: homeFiltersHome,
              children: [
                {
                  path: "",
                  name: "AllFilters",
                  component: AllFilters,
                },
                {
                  path: "add",
                  name: "AddFilter",
                  component: AddFilter,
                },
                {
                  path: "edit/:id",
                  name: "EditFilter",
                  component: EditFilter,
                  props: true,
                },
              ],
            },

            // SubCategories
            {
              path: "SubCategories",
              component: SubCategory,
              children: [
                {
                  path: "",
                  name: "AllSubCategories",
                  component: AllSubCategories,
                },
                {
                  path: "add",
                  name: "AddSubCategory",
                  component: AddSubCategory,
                },
                {
                  path: "edit/:id",
                  name: "EditSubCategory",
                  component: EditSubCategory,
                  props: true,
                },
              ],
            },
          ],
        },
        // ========== End HomePage ==========

        // ========== Start Main_Slider ==========
        {
          path: "/sliders",
          component: SlidersHome,
          children: [
            // Show All
            {
              path: "",
              name: "AllSliders",
              component: AllSliders,
            },
            // Add
            {
              path: "add",
              name: "AddSlider",
              component: AddSlider,
            },
            // Edit
            {
              path: "edit/:id",
              name: "EditSlider",
              component: EditSlider,
              props: true,
            },
          ],
        },
        // ========== End Main_Slider ==========

        // ========== Start Countries ==========
        {
          path: "/countries",
          component: CountriesHome,
          children: [
            // Show All
            {
              path: "",
              name: "AllCountries",
              component: AllCountries,
            },
            // Add
            {
              path: "add",
              name: "AddCountry",
              component: AddCountry,
            },
            // Edit
            {
              path: "edit/:id",
              name: "EditCountry",
              component: EditCountry,
              props: true,
            },
          ],
        },
        // ========== End Countries ==========

        // ========== Start Cities ==========
        {
          path: "/cities",
          component: CitiesHome,
          children: [
            // Show All
            {
              path: "",
              name: "AllCities",
              component: AllCities,
            },
            // Add
            {
              path: "add",
              name: "AddCity",
              component: AddCity,
            },
            // Edit
            {
              path: "edit/:id",
              name: "EditCitiy",
              component: EditCity,
              props: true,
            },
          ],
        },
        // ========== End Cities ==========

        // ========== Start Permissions ==========
        {
          path: "/permissions",
          component: PermissionsHome,
          children: [
            // Show All
            {
              path: "",
              name: "AllPermissions",
              component: AllPermissions,
            },
            // Add
            {
              path: "add",
              name: "AddPermission",
              component: AddPermission,
            },
            // Edit
            {
              path: "edit/:id",
              name: "EditPermission",
              component: EditPermission,
              props: true,
            },
          ],
        },
        // ========== End Permissions ==========

        // ========== Start Ades ==========
        {
          path: "/ades",
          component: AdesHome,
          children: [
            // Show All
            {
              path: "",
              name: "AllAdes",
              component: AllAdes,
            },
            // Add
            {
              path: "show/:id",
              name: "ShowAd",
              component: ShowAd,
              props: true,
            },
            // Add
            {
              path: "add",
              name: "AddAde",
              component: AddAde,
            },
            // Edit
            {
              path: "edit/:id",
              name: "EditAde",
              component: EditAde,
              props: true,
            },
          ],
        },
        // ========== End Ades ==========

        // ========== Start Promo Code ==========
        {
          path: "/promoCode",
          component: PromoCode,
          children: [
            // Show All
            {
              path: "",
              name: "AllPromoCode",
              component: AllPromoCode,
            },
            // Add
            {
              path: "add",
              name: "AddPromoCode",
              component: AddPromoCode,
            },
            // Edit
            {
              path: "edit/:id",
              name: "EditPromoCode",
              component: EditPromoCode,
              props: true,
            },
          ],
        },
        // ========== End Promo Code ==========

        // ========== Start Notifications ==========
        {
          path: "/notifications",
          component: Notifications,
          children: [
            // Show All
            {
              path: "",
              name: "AllNotifications",
              component: AllNotifications,
            },
            // Show Single
            {
              path: "show/:id",
              name: "showNotifications",
              component: showNotifications,
            },
            // Add
            {
              path: "add",
              name: "AddNotifications",
              component: AddNotifications,
            },
          ],
        },
        // ========== End Notifications ==========

        // ========== Start Status ==========
        {
          path: "/status",
          component: Status,
          children: [
            // Show All
            {
              path: "",
              name: "AllStatus",
              component: AllStatus,
            },
            // Add
            {
              path: "add",
              name: "AddStatus",
              component: AddStatus,
            },
            // Edit
            {
              path: "edit/:id",
              name: "EditStatus",
              component: EditStatus,
              props: true,
            },
          ],
        },
        // ========== End Status ==========

        // ========== Start Shipping ==========
        {
          path: "/shipping",
          component: Shipping,
          children: [
            // Show All
            {
              path: "",
              name: "AllShipping",
              component: AllShipping,
            },
            // Add
            {
              path: "add",
              name: "AddShipping",
              component: AddShipping,
            },
            // Edit
            {
              path: "edit/:id",
              name: "EditShipping",
              component: EditShipping,
              props: true,
            },
          ],
        },
        // ========== End Shipping ==========

        // ========== Start Packages ==========
        {
          path: "/packages",
          component: Packages,
          children: [
            // Show All
            {
              path: "",
              name: "AllPackages",
              component: AllPackages,
            },
            // Add
            {
              path: "add",
              name: "AddPackage",
              component: AddPackage,
            },
            // Edit
            {
              path: "edit/:id",
              name: "EditPackage",
              component: EditPackage,
              props: true,
            },
          ],
        },
        // ========== End Packages ==========

        // ========== Start Admins ==========
        {
          path: "/admins",
          component: AdminHome,
          children: [
            {
              path: "",
              name: "AllAdmins",
              component: AllAdmins,
            },
            {
              path: "add",
              name: "AddAdmin",
              component: AddAdmin,
            },
            {
              path: "edit/:id",
              name: "EditAdmin",
              component: EditAdmin,
              props: true,
            },
            // Show Admin
            {
              path: "show/:id",
              component: AdminShowHome,
              props: true,
              children: [
                {
                  path: "",
                  name: "Cards",
                  component: Cards,
                  props: true,
                },
                {
                  path: "data",
                  name: "PersonalData",
                  component: PersonalData,
                  props: true,
                },
              ],
            },
          ],
        },
        // ========== End Admins ==========

        // ========== Start Clients ==========
        {
          path: "/clients",
          component: ClientHome,
          children: [
            {
              path: "",
              name: "AllClients",
              component: AllClients,
            },
            {
              path: "add",
              name: "AddClient",
              component: AddClient,
            },
            {
              path: "edit/:id",
              name: "EditClient",
              component: EditClient,
              props: true,
            },
            // Show Admin
            {
              path: "show/:id",
              component: ClientShowHome,
              props: true,
              children: [
                {
                  path: "",
                  name: "ClientCards",
                  component: ClientCards,
                  props: true,
                },
                {
                  path: "data",
                  name: "ClientPersonalData",
                  component: ClientPersonalData,
                  props: true,
                },
              ],
            },
          ],
        },
        // ========== End Clients ==========

        // ========== Start FAQS ==========
        {
          path: "/faqs",
          component: FaqsHome,
          children: [
            {
              path: "",
              name: "faqs",
              component: Faqs,
            },
            {
              path: "add",
              name: "AddFaq",
              component: AddFaq,
            },
            {
              path: "edit/:id",
              name: "EditFaq",
              component: EditFaq,
              props: true,
            },
          ],
        },
        // ========== End FAQS ==========

        // ========== Start Settings ==========
        {
          path: "/settings",
          component: SettingsHome,
          children: [
            // ABOUT
            {
              alias: "/settings",
              path: "about",
              component: AboutUsHome,
              children: [
                // Show
                {
                  path: "",
                  name: "aboutShow",
                  component: AboutShow,
                },
                // Edit
                {
                  path: "edit",
                  name: "EditAbout",
                  component: EditAbout,
                },
              ],
            },
            // TERMS
            {
              path: "terms",
              component: TermsHome,
              children: [
                // Show
                {
                  path: "",
                  name: "TermsShow",
                  component: TermsShow,
                },
                // Edit
                {
                  path: "edit",
                  name: "EditTerms",
                  component: EditTerms,
                },
              ],
            },
            // POLICY
            {
              path: "policy",
              component: PolicyHome,
              children: [
                // Show
                {
                  path: "",
                  name: "PolicyShow",
                  component: PolicyShow,
                },
                // Edit
                {
                  path: "edit",
                  name: "EditPolicy",
                  component: EditPolicy,
                },
              ],
            },
            // POLICY
            {
              path: "contact",
              component: ContactHome,
              children: [
                // Show
                {
                  path: "",
                  name: "ContactShow",
                  component: ContactShow,
                },
                // Edit
                {
                  path: "edit",
                  name: "EditContact",
                  component: EditContact,
                },
              ],
            },
          ],
        },
        // ========== End Settings ==========
      ],
    },

    // Auth
    {
      path: "/login",
      name: "Login",
      component: Login,
    },

    // NotFound
    { path: "/:notFound(.*)", name: "NotFound", component: NotFound },
  ],
});

const TOKEN = store.getters["auth_module/currentUser"].token;

router.beforeEach((to, _2, next) => {
  // if(to){
  //   console.log(document.querySelector(".btn_loader"));
  //   // ===> Add Overlay at button submit
  //   if (document.getElementsByClassName("btn_loader").length != 0) {
  //     const collection = document.getElementsByClassName("button_style_1");
  //     collection[0].setAttribute("disabled", "true");
  //   }
  //   next();
  // }
  if (to.name !== "Login" && !TOKEN) {
    next({ name: "Login" });
  } else if (to.name == "Login" && TOKEN) {
    next("/");
  } else if (to.name == "Login" || to.name == "NotFound") {
    store.dispatch("sideNav_module/reseatBodyPadding");
    next();
  } else {
    next();
  }
});

Vue.use(VueRouter);
export default router;
