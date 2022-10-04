<template>
  <div class="wrraper">
    <!-- Start Breadcrumb -->
    <Breadcrumb :items="items" />
    <!-- End Breadcrumb -->

    <!-- START:: NOTIFICATIONS CONTENT -->
    <div class="row">
      <!-- SINGLE -->
      <div class="col-md-4">
        <div class="custom_card profile_card">
          <div class="profile_card_component">
            <span class="title">{{$t("عنوان الإشعار")}}</span>
            <p>{{ data.title }}</p>
          </div>
        </div>
      </div>
      <!-- SINGLE -->

      <!-- SINGLE -->
      <div class="col-md-4">
        <div class="custom_card profile_card">
          <div class="profile_card_component">
            <span class="title">{{$t("محتوي الإشعار")}}</span>
            <p>{{ data.body }}</p>
          </div>
        </div>
      </div>
      <!-- SINGLE -->

      <!-- SINGLE -->
      <div class="col-md-4">
        <div class="custom_card profile_card">
          <div class="profile_card_component">
            <span class="title">{{$t("وقت الإشعار")}}</span>
            <p>{{ data.created_time }}</p>
          </div>
        </div>
      </div>
      <!-- SINGLE -->
    </div>

    <!-- END:: NOTIFICATIONS CONTENT -->
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      // ========== Breadcrumbs
      items: [
        {
          text: this.$t("breadcrumb.mainPage"),
          disabled: false,
          href: "/",
        },
        {
          text: this.$t("breadcrumb.notifications.title"),
          disabled: false,
          href: "/notifications",
        },
      ],

      // ========== Statistics
      statisticsItem: {},

      // ========== Model
      model_1: {
        show_model: false,
        model_img_src: "",
      },

      // ========== Body Section
      calories: "",

      // ========== Your Data
      rows: [], // injected in created

      // ========== elected Data
      selected: [],
      singleSelect: false,

      // ========== Loding
      lodaing: false,

      // ========== STATIC DATA
      data: null,
    };
  },

  computed: {
    headers() {
      if (this.lang == "ar") {
        return [
          {
            text: "(عربي) اسم الصلاحية",
            align: "center",
            value: "name_ar",
            sortable: false,
          },
          {
            text: "(انجليزي) اسم الصلاحية",
            align: "center",
            value: "name_en",
            sortable: false,
          },
          {
            text: "التحكم",
            value: "actions",
            sortable: false,
            align: "center",
          },
        ];
      } else {
        return [
          {
            text: "permissionsName (ar)",
            align: "center",
            value: "name_ar",
            sortable: false,
          },
          {
            text: "permissionsName (en)",
            align: "center",
            value: "name_en",
            sortable: false,
          },
          {
            text: "control",
            value: "actions",
            sortable: false,
            align: "center",
          },
        ];
      }
    },
  },

  methods: {
    // Get Data
    getData() {
      this.$axios({
        method: "GET",
        url: `notification/${this.$route.params.id}`,
      }).then((res) => {
        this.data = res.data.data;
      });
    },
  },

  // ======= hooks
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped></style>
