<template>
  <div class="setting_content">
    <div class="setting_content_header">
      <div class="route_title">
        <h4>{{ $t("settings.about") }}</h4>
      </div>

      <div class="edit_route_wrapper">
        <router-link to="/settings/about/edit">
          <i class="fal fa-edit"></i>
        </router-link>
      </div>
    </div>

    <div class="settings_content_body">
      <div class="image_settings">
        <img src="@/assets/images/Users/user.jpg" />
      </div>
      <p v-html="about.about_ar"></p>
      <p v-html="about.about_en"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["about"],
  data() {
    return {
      // data: {
      //   ar: {
      //     about:
      //       "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد",
      //   },
      //   en: {
      //     about:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //   },
      // },
    };
  },
  created() {},
};
</script>
