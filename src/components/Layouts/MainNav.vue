<template>
  <nav class="main_nav" :class="{ smallScreen: isSmallScreen }">
    <div class="custom_card">
      <div class="navContent">
        <div class="user" v-if="userDataExist">
          <div @click.stop="toggle_profile_menu" class="image">
            <img src="../../assets/images/Users/user.jpg" />

            <!-- Profile dropdown -->
            <transition name="fadeUpTransform">
              <div
                v-if="profile_menu"
                class="custom_card profile_dropdown nav_dropdown"
              >
                <ul>
                  <li>
                    <router-link to="/userProfile/test">
                      <span class="icon"></span
                      ><span class="text">{{
                        $t("navbar.userMenu.profile")
                      }}</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/edituserProfile">
                      <span class="icon"></span
                      ><span class="text">{{
                        $t("navbar.userMenu.editProfile")
                      }}</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/chat"
                      ><span class="icon"></span
                      ><span class="text">{{
                        $t("navbar.userMenu.chats")
                      }}</span></router-link
                    >
                  </li>
                  <v-divider></v-divider>
                  <li @click="logOut">
                    <span class="icon"></span
                    ><span class="text">{{
                      $t("navbar.userMenu.logout")
                    }}</span>
                  </li>
                </ul>
              </div>
            </transition>
          </div>

          <div class="text">
            <span class="name">Omar Momen</span>
            <span class="available">01009867150</span>
          </div>
        </div>

        <div class="dashName" v-else>
          <span v-if="!isSmallScreen" class="_title"
            >{{ $t("navbar.Dash_Name") }} </span
          ><span class="name">Speed4Ever</span>
          <span class="icon"><i class="fas fa-shopping-cart"></i></span>
        </div>

        <div class="otherSide">
          <ul class="routerIcons">
            <!-- LogOut -->
            <li v-if="!isSmallScreen" @click="logOut">
              <i class="fal fa-sign-out"></i>
            </li>

            <!-- Notifications -->
            <li
              class="notification_list_item"
              @click.stop="toggle_notification_menu"
            >
              <div class="notification_icon">
                <i class="far fa-bell"></i>
                <template v-if="notifications">
                  <span
                    v-if="count_notifications < 20"
                    class="notificationNumber"
                  >
                    {{ count_notifications }}
                  </span>
                  <span
                    v-else
                    class="notificationNumber notificationNumber2"
                    dir="ltr"
                    >+20</span
                  >
                </template>
              </div>

              <!-- notification dropdown -->
              <transition name="fadeUpTransform">
                <div
                  v-if="notification_menu"
                  class="custom_card notification_dropdown nav_dropdown"
                >
                  <header class="header">
                    <h3>
                      {{ count_notifications }}
                      {{ $t("navbar.notification.topTitle_1") }}
                    </h3>
                    <p>{{ $t("navbar.notification.topTitle_2") }}</p>
                  </header>

                  <!-- If Empty -->
                  <div
                    class="empty_notifications_wrapper d-flex flex-column justify-content-center align-items-center py-4"
                    v-if="notifications.length == 0"
                  >
                    <img
                      src="../../assets/images/no_notifications.svg"
                      alt="No Notifications"
                      width="120"
                      height="150"
                    />

                    <h4>{{ $t("navbar.notification.no_notifications") }}</h4>
                  </div>
                  <!-- Else -->
                  <ul class="notifications_container" v-else>
                    <li
                      v-for="item in notifications"
                      :key="item.id"
                      :class="item.is_read == true ? 'is_read' : ''"
                    >
                      <router-link
                        :to="`/notifications/show/${item.id}`"
                        class="item"
                        @click="item.is_read == true"
                      >
                        <span class="icon"
                          ><i class="fal fa-plus-square"></i
                        ></span>
                        <div class="text">
                          <h4>{{ item.title }}</h4>
                          <p>{{ item.body.slice(0, 40) + "..." }}</p>
                        </div>
                        <span class="time">{{ item.created_time }}</span>
                      </router-link>
                    </li>
                    <li class="link_show_all">
                      <router-link to="/notifications">{{
                        $t("showAll")
                      }}</router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </li>

            <!-- Theme -->
            <li
              v-if="current_theme == 'dark' && !isSmallScreen"
              @click="changeTheme('light')"
            >
              <i class="fal fa-sun"></i>
            </li>
            <li
              v-if="current_theme == 'light' && !isSmallScreen"
              @click="changeTheme('dark')"
            >
              <i class="fal fa-moon"></i>
            </li>

            <!-- Lang -->
            <!-- <li v-if="lang == 'ar' && !isSmallScreen" @click="changeLang('en')">
              <i class="fal fa-globe"></i>
            </li>
            <li v-if="lang == 'en' && !isSmallScreen" @click="changeLang('ar')">
              <i class="fal fa-globe"></i>
            </li> -->
          </ul>

          <!-- Mobile Menue -->
          <span
            @click.stop="toggleMenu"
            v-if="isSmallScreen"
            class="toggleMenue"
          >
            <i class="fas fa-bars"></i>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      profile_menu: false,
      notification_menu: false,

      // notifications: [
      //   {
      //     title: "title",
      //     body: "lorem test test test test",
      //     created_time: "2022-5-7",
      //   },
      // ],

      userDataExist: false,
    };
  },

  methods: {
    toggle_profile_menu() {
      this.profile_menu = !this.profile_menu;
      this.notification_menu = false;
    },

    toggle_notification_menu() {
      this.notification_menu = !this.notification_menu;
      this.profile_menu = false;
      this.get_notifications();
    },

    toggleMenu() {
      document.querySelector(".smallScreenSidebar").classList.toggle("active");
    },

    logOut() {
      this.$store.dispatch("auth_module/logOut");
    },

    changeTheme(value) {
      this.$store.dispatch("theme_module/changeTheme", value);
      if (value == "light") {
        this.$vuetify.theme.dark = false;
      } else {
        this.$vuetify.theme.dark = true;
      }
    },

    changeLang(value) {
      this.$store.dispatch("lang_module/switchLang", value);
    },
    get_notifications() {
      this.$store.dispatch("notification_module/get_notifications");
    },
  },

  computed: {
    ...mapGetters({
      isSmallScreen: "sideNav_module/isSmallScreen",
      current_theme: "theme_module/current_theme",
      lang: "lang_module/lang",
      notifications: "notification_module/notifications",
      count_notifications: "notification_module/count_notifications",
    }),
  },

  mounted() {
    document.querySelector("body").addEventListener("click", () => {
      this.profile_menu = false;
      this.notification_menu = false;
      if (document.querySelector(".smallScreenSidebar")) {
        document
          .querySelector(".smallScreenSidebar")
          .classList.remove("active");
      }
    });

    this.get_notifications();
  },
};
</script>
