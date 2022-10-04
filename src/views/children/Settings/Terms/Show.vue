<template>
  <div class="setting_content">
    <!--START:: SETTING CONTENT HEADER-->
    <div class="setting_content_header">
      <!--START:: ROUTE TITLE -->
      <div class="route_title">
        <h4>{{ $t("settings.terms") }}</h4>
      </div>
      <!--END:: ROUTE TITLE -->

      <!-- START:: EDIT ROUTE WRAPPER -->
      <div class="edit_route_wrapper">
        <router-link to="/settings/terms/edit">
          <i class="fal fa-edit"></i>
        </router-link>
      </div>
      <!-- END:: EDIT ROUTE WRAPPER -->
    </div>
    <!--END:: SETTING CONTENT HEADER-->

    <!--START:: SETTING CONTENT Body-->
    <div class="settings_content_body">
      <!-- <div class="image_settings">
        <img
          src="https://ui.alalmiyalhura.com/omar_momen/KANAF/img/about.7c19e0b3.png"
          alt=""
          srcset=""
        />
      </div> -->
      <p v-html="allData.terms_ar"></p>
      <p v-html="allData.terms_en"></p>
    </div>
    <!--END:: SETTING CONTENT Body-->
  </div>
</template>

<script>
export default {
  props: ["allData"],
  data() {
    return {
      //Start Data
      // allData: {
      //   terms_ar:
      //     "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد",
      //   terms_en:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      // },
      //End Data
    };
  },
  methods: {
    //Get Data
    // getData() {
    //   this.$axios({
    //     method: "GET",
    //     url: "settings/terms",
    //   }).then((res) => {
    //     this.allData = res.data.data;
    //   });
    // },
    //Get Data
  },
  mounted() {},
};
</script>

<style></style>
