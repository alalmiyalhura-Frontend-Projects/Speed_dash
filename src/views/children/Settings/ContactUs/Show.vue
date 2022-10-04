<template>
  <div class="setting_content">
    <!--START:: SETTING CONTENT HEADER-->
    <div class="setting_content_header">
      <!--START:: ROUTE TITLE -->
      <div class="route_title">
        <h4>{{ $t("settings.contact") }}</h4>
      </div>
      <!--END:: ROUTE TITLE -->

      <!-- START:: EDIT ROUTE WRAPPER -->
      <div class="edit_route_wrapper">
        <router-link to="/settings/contact/edit">
          <i class="fal fa-edit"></i>
        </router-link>
      </div>
      <!-- END:: EDIT ROUTE WRAPPER -->
    </div>
    <!--END:: SETTING CONTENT HEADER-->
    <div class="row">
      <!-- START:: PHONE -->
      <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">رقم الهاتف</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="allData.phone"
            readonly
          />
        </div>
      </div>
      <!-- END:: PHONE -->

      <!-- START:: EMAIL -->
      <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">البريد الإلكتروني</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="allData.email"
            readonly
          />
        </div>
      </div>
      <!-- END:: EMAIL -->

      <!-- START:: WHATSAPP -->
      <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">رقم الواتساب</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="allData.phone"
            readonly
          />
        </div>
      </div>
      <!-- END:: WHATSAPP -->

      <!-- START:: WHATSAPP -->
      <!-- <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">رقم الفاكس</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="contactData.lan_number"
            readonly
          />
        </div>
      </div> -->
      <!-- END:: WHATSAPP -->

      <!-- START:: FACEBOOK -->
      <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">الفيسبوك</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="allData.facebook"
            readonly
          />
        </div>
      </div>
      <!-- END:: FACEBOOK -->

      <!-- START:: TWITTER -->
      <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">تويتر</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="allData.twitter"
            readonly
          />
        </div>
      </div>
      <!-- END:: TWITTER -->

      <!-- START:: INSTAGRAM -->
      <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">انستجرام</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="allData.instagram"
            readonly
          />
        </div>
      </div>
      <!-- END:: INSTAGRAM -->

      <!-- START:: App Store -->
      <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">آب ستور</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="allData.app_store_app"
            readonly
          />
        </div>
      </div>
      <!-- END:: App Store -->

      <!-- START:: Google Play -->
      <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">جوجل بلاي</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="allData.g_play_app"
            readonly
          />
        </div>
      </div>
      <!-- END:: Google Play -->

      <!-- START:: SNAPCHAT -->
      <!-- <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">سناب شات</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="contactData.snapchat"
            readonly
          />
        </div>
      </div> -->
      <!-- END:: SNAPCHAT -->

      <!-- START:: YOUTUBE -->
      <!-- <div class="col-lg-12">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">يوتيوب</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="contactData.youtube"
            readonly
          />
        </div>
      </div> -->
      <!-- END:: YOUTUBE -->

      <!-- START:: FOOTER TEXT -->
      <!-- <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">نص الفوتر (عربي)</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="contactData.footer_text_ar"
            readonly
          />
        </div>
      </div> -->
      <!-- END:: FOOTER TEXT -->

      <!-- START:: FOOTER TEXT -->
      <!-- <div class="col-lg-6">
        <div class="input_wrapper top_label only_read my-2">
          <label class="form-label">نص الفوتر (English)</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="contactData.footer_text_en"
            readonly
          />
        </div>
      </div> -->
      <!-- END:: FOOTER TEXT -->

      <!-- START:: MAP -->
      <div class="col-lg-12">
        <div class="mt-5">
          <div class="large-map">
            <GmapMap :center="mapPosition" :zoom="7" map-type-id="terrain">
              <GmapMarker
                :position="mapPosition"
                :clickable="true"
                :draggable="false"
              />
              />
            </GmapMap>
          </div>
        </div>
      </div>
      <!-- END:: MAP -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //ALL DATA
      allData: {
        phone: null,
        email: null,
        whatsapp: null,
        lan_number: null,
        facebook: null,
        twitter: null,
        instagram: null,
        snapchat: null,
        youtube: null,
        lat: null,
        lng: null,
      },
      contactData: {
        phone: null,
        email: null,
        whatsapp: "012345678910",
        lan_number: "0512124124",
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com",
        snapchat: "https://www.snapchat.com",
        youtube: "https://www.youtube.com",
        footer_text_ar:
          "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) يد",
        footer_text_en:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
      },
      vat_value: null,
      //ALL DATA

      //LOADING
      loading: false,
      //LOADING

      //MAP
      mapPosition: {
        lat: "24.774265",
        lng: "46.738586",
      },
      //MAP
    };
  },
  methods: {
    //START:: GET DATA
    getData() {
      this.loading = true;
      this.$axios({
        method: "GET",
        url: "setting",
      }).then((res) => {
        this.loading = false;
        this.allData = res.data.data;
        this.mapPosition.lat = Number(this.allData.lat);
        this.mapPosition.lng = Number(this.allData.lng);
      });
    },
    //END:: GET DATA
  },
  created() {
    this.getData();
  },
};
</script>

<style>
.vue-map-container {
  height: 450px;
}
</style>
