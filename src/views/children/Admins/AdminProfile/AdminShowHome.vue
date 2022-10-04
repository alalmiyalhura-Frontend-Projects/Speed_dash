<template>
  <div class="profile_wrapper most_profile">
    <div class="profile_header_wrapper custom_card">
      <vue-particles
        color="#36be6c"
        :particleOpacity="0.7"
        :particlesNumber="180"
        shapeType="circle"
        :particleSize="4"
        linesColor="#36be6c"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.3"
        :linesDistance="100"
        :moveSpeed="4"
        :hoverEffect="true"
        :clickEffect="true"
        hoverMode="repulse"
        clickMode="push"
      >
      </vue-particles>

      <div class="profile_header_data" v-if="data.userInfo">
        <div class="avatar_wrapper">
          <img
            :src="data.userInfo.image"
            width="100"
            height="100"
            alt="Avatar"
          />
        </div>

        <div class="name_wrapper">
          <h3>{{ data.userInfo.fullname }}</h3>
          <h5 class="font-weight">{{ data.userInfo.email }}</h5>
        </div>
      </div>
    </div>

    <transition name="fadeInUp" mode="out-in">
      <router-view :userInfo="data.userInfo"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      data: {
        userInfo: null,
      },
    };
  },

  methods: {
    getData() {
      this.$axios({
        method: "GET",
        url: `admin/${this.id}`,
      }).then((res) => {
        this.data.userInfo = res.data.data;
      });
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style></style>
