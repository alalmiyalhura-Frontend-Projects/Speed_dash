<template>
  <div class="create_wrapper">
    <!-- Start Breadcrumb -->
    <Breadcrumb :items="items" />
    <!-- End Breadcrumb -->

    <div class="custom_card">
      <div class="card-header">
        <h4 class="card-title">{{ $t("edit") }}</h4>
      </div>

      <!-- ==== Start Form ==== -->
      <form @submit.prevent="validateCreateForm">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.title_ar"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.title_ar")
                }}</label>
              </div>
            </div>

            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.title_en"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.title_en")
                }}</label>
              </div>
            </div>

            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <label for="textarea_1" class="form-label">{{
                  $t("forms.labels.content_ar")
                }}</label>
                <textarea
                  class="form-control"
                  rows="5"
                  v-model="data.desc_ar"
                ></textarea>
              </div>
            </div>

            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <label for="textarea_1" class="form-label">{{
                  $t("forms.labels.content_en")
                }}</label>
                <textarea
                  class="form-control"
                  rows="5"
                  v-model="data.desc_en"
                ></textarea>
              </div>
            </div>

            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="number"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.ads_count"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.ads_count")
                }}</label>
              </div>
            </div>

            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="number"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.price"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.price")
                }}</label>
              </div>
            </div>

            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="number"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.duration"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.duration")
                }}</label>
              </div>
            </div>
          </div>
        </div>

        <div class="buttons_wrapper">
          <button class="button_style_1" :class="btnIsLoading ? 'disabled' : ''">
            {{ $t("forms.submit") }}
            <span class="btn_loader" v-if="btnIsLoading"></span>
          </button>
        </div>
      </form>
      <!-- ==== End Form ==== -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Update",

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
          text: this.$t("breadcrumb.packages.title"),
          disabled: false,
          href: "/packages",
        },
        {
          text: this.$t("breadcrumb.packages.edit"),
          disabled: true,
          href: "",
        },
      ],

      // ========== Loading
      btnIsLoading: false,

      // ========== create_data
      data: {
        title_ar: null,
        title_en: null,
        desc_ar: null,
        desc_en: null,
        ads_count: null,
        price: null,
        duration: null,
      },
    };
  },

  methods: {
    // Uplode Image
    uplodeImg_1(obj) {
      this.data.image = obj;
    },

    //GET DATA
    getData() {
      this.$axios({
        method: "GET",
        url: "package/" + this.id,
      }).then((res) => {
        let myData = res.data.data;
        this.data.title_ar = myData.ar.name;
        this.data.title_en = myData.en.name;
        this.data.desc_ar = myData.ar.desc;
        this.data.desc_en = myData.en.desc;
        this.data.duration = myData.duration;
        this.data.price = myData.package_price;
        this.data.ads_count = myData.number_of_products;
      });
    },
    //GET DATA

    // Validate Data
    validateCreateForm() {
      this.btnIsLoading = true;

      if (!this.data.title_ar) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.title_ar"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.title_en) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.title_en"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.desc_ar) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.content_ar"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.desc_en) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.content_en"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.desc_en) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.duration"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else {
        this.submitData();
        return;
      }
    },

    // Submit Data
    submitData() {
      const submit_data = new FormData();
      submit_data.append("ar[name]", this.data.title_ar);
      submit_data.append("en[name]", this.data.title_en);
      submit_data.append("ar[desc]", this.data.desc_ar);
      submit_data.append("en[desc]", this.data.desc_en);
      submit_data.append("package_price", this.data.price);
      submit_data.append("number_of_products", this.data.ads_count);
      submit_data.append("duration", this.data.duration);
      submit_data.append("_method", "PATCH");

      this.$axios({
        method: "POST",
        url: "package/" + this.id,
        data: submit_data,
      })
        .then(() => {
          this.$iziToast.success({
            timeout: 2000,
            message: this.$t("addSuccess"),
            position: "bottomRight",
          });
          this.$router.push({ path: "/packages" });
          this.btnIsLoading = false;
        })
        .catch((err) => {
          this.$iziToast.error({
            timeout: 2000,
            message: err.response.data.message,
            position: "bottomRight",
          });
          this.btnIsLoading = false;
        });
    },
  },

  created() {
    this.getData();
  },
};
</script>
