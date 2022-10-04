<template>
  <div class="homePage">
    <!-- Start Breadcrumb -->
    <Breadcrumb :items="items" />
    <!-- End Breadcrumb -->

    <!-- Start Statistics Card-->
    <div class="row mb-5">
      <div
        class="col-lg-4 col-md-4 col-12"
        v-for="item in statisticsItems.home"
        :key="item.id"
      >
        <stats-card :title="item.name" :number="item.count"></stats-card>
      </div>
    </div>
    <!-- End Statistics Card-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ========== Breadcrumbs
      items: [
        {
          text: this.$t("breadcrumb.mainPage"),
          disabled: false,
          href: "/",
        },
      ],

      statisticsItems: [
        {
          id: 1,
          number: 10,
          title: "كل السلايدز",
        },
      ],
    };
  },

  methods: {},

  created() {
    this.statisticsItems = [];
    this.$axios({
      method: "GET",
      url: "home",
    }).then((res) => {
      this.statisticsItems = res.data.data;
    });
  },
};
</script>

<style lang="scss">
.custom_card.hideOverflow {
  direction: ltr;
}

.grid-widget-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.grid-widget {
  flex: 1;
  box-sizing: border-box;
  padding: 0;
  height: 100%;
  min-height: 350px;
  width: 100%;
  overflow: auto;
}

.chart-wrapper {
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
}
</style>
