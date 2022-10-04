<template>
  <div>
    <main-nav></main-nav>
    <sidebar></sidebar>
    <transition name="fadeInUp" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MainNav from "../components/Layouts/MainNav.vue";
import Sidebar from "../components/Layouts/Sidebar.vue";

// START:: IMPORTING VUEX HELPERS
import { mapGetters, mapActions } from "vuex";
// END:: IMPORTING VUEX HELPERS

// START:: IMPORTING SOCKET
// import Echo from "laravel-echo";
import { io } from "socket.io-client";
// END:: IMPORTING SOCKET

export default {
  name: "Home",

  components: { MainNav, Sidebar },

  data() {
    return {
      isLoading: true,
      userId: localStorage.getItem("Speed_Dash_User_Id"),
    };
  },

  methods: {
    // START:: VUEX NOTIFICATIONS
    ...mapActions("notification_module", ["get_notifications"]),
    // END:: VUEX NOTIFICATIONS

    launch_resize_dispatch() {
      this.$store.dispatch("sideNav_module/onResize");
    },

    // START:: RECEIVE SOCKET NOTIFICATION
    receiveSocketNotification() {
      var socket = io("https://speed4ever.elsaed.aait-d.com:6054");
      let that = this;
      socket.emit("user_id", this.currentUser.id);
      socket.on(
        "private-speed4ever-notification." + this.currentUser.id + ":Noty",
        function (data) {
          console.log(data);
          that.$iziToast.info({
            title: data.title,
            message: data.body.slice(0, 40) + "...",
            backgroundColor: "#F8F8FA",
            titleColor: "#0E59B6",
            position: "topRight",
            rtl: true,
            icon: "fad fa-bells",
          });
          new Audio(require("../assets/sounds/notification.mp3")).play();
          that.get_notifications();
        }
      );
    },
    // END:: RECEIVE SOCKET NOTIFICATION
  },

  computed: {
    ...mapGetters({
      currentUser: "auth_module/currentUser",
    }),
  },

  mounted() {
    // ===> check if the page is login
    this.launch_resize_dispatch();
    if (this.$store.getters.resizeEventExisit == false) {
      window.addEventListener("resize", this.launch_resize_dispatch, true);
      this.$store.commit("changeRessizeEvent");
    }
  },
  created() {
    // START:: FIRE METHODS
    this.receiveSocketNotification();
    if (this.currentUser.token) {
    }
    // END:: FIRE METHODS
  },
};
</script>
