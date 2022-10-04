<template>
  <div class="all_settings custom_card">
    <div class="container-fluid px-0">
      <div class="row">
        <div class="col-sm-12">
          <div class="settings_tabs">
            <ul class="nav_pills">
              <li class="nav_item">
                <router-link class="nav_link" to="/settings/about">{{
                  $t("settings.about")
                }}</router-link>
              </li>
              <li class="nav_item">
                <router-link class="nav_link" to="/settings/terms">{{
                  $t("settings.terms")
                }}</router-link>
              </li>
              <li class="nav_item">
                <router-link class="nav_link" to="/settings/policy">{{
                  $t("settings.policy")
                }}</router-link>
              </li>
              <li class="nav_item">
                <router-link class="nav_link" to="/settings/contact">{{
                  $t("settings.contact")
                }}</router-link>
              </li>
            </ul>
          </div>

          <div class="setting_tabs_content">
            <transition name="fadeIn" mode="out-in">
              <router-view :allData="allData"></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //All Data
      allData: null,
    };
  },
  methods: {
    //GET DATA
    getData() {
      this.$axios({
        method: "GET",
        url: "setting",
      }).then((res) => {
        this.allData = res.data.data;
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
