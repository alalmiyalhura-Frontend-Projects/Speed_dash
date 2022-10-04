<template>
  <div class="create_wrapper">
    <!-- Start Breadcrumb -->
    <Breadcrumb :items="items" />
    <!-- End Breadcrumb -->

    <div class="custom_card">
      <div class="card-header">
        <h4 class="card-title">{{ $t("addNew") }}</h4>
      </div>

      <!-- ==== Start Form ==== -->
      <form @submit.prevent="validateCreateForm">
        <div class="container">
          <div class="row justify-content-between">
            <!-- Image -->ffffffffff
            <!-- <uplode-image data_src="data.image" @inputChanged="uplodeImg_1"></uplode-image> -->

            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.ar.name"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.name_ar")
                }}</label>
              </div>
            </div>

            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.en.name"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.name_en")
                }}</label>
              </div>
            </div>

            <!-- <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.ar.nationality"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.nationality_ar")
                }}</label>
              </div>
            </div>

            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.en.nationality"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.nationality_en")
                }}</label>
              </div>
            </div>

            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.ar.currency"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.currency_ar")
                }}</label>
              </div>
            </div>

            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.en.currency"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.currency_en")
                }}</label>
              </div>
            </div>

            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.phone_code"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.phone_code")
                }}</label>
              </div>
            </div> -->
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
          text: this.$t("breadcrumb.countries.title"),
          disabled: false,
          href: "/countries",
        },
        {
          text: this.$t("breadcrumb.countries.add"),
          disabled: true,
          href: "",
        },
      ],

      // ========== Loading
      btnIsLoading: false,

      // ========== create_data
      data: {
        image: null,
        ar: { name: null, nationality: null, currency: null },
        en: { name: null, nationality: null, currency: null },
        phone_code: null,
      },
    };
  },

  methods: {
    // Uplode Image
    uplodeImg_1(obj) {
      this.data.image = obj;
    },

    // Validate Data
    validateCreateForm() {
      this.btnIsLoading = true;

      // if (!this.data.image?.img_src) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("forms.validation.image"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // } else
      if (!this.data.ar.name) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.name_ar"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.en.name) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.name_en"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      }
      // else if (!this.data.ar.nationality) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("forms.validation.nationality_ar"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // } else if (!this.data.en.nationality) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("forms.validation.nationality_en"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // } else if (!this.data.ar.currency) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("forms.validation.currency_ar"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // } else if (!this.data.en.currency) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("forms.validation.currency_en"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // } else if (!this.data.phone_code) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("forms.validation.phone_code"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // }
      else {
        this.submitData();
        return;
      }
    },

    // Submit Data
    submitData() {
      const submit_data = new FormData();
      // submit_data.append("flag", this.data.image.img_file);
      submit_data.append("ar[name]", this.data.ar.name);
      submit_data.append("en[name]", this.data.en.name);
      submit_data.append("_method", "PATCH");
      // submit_data.append("ar[nationality]", this.data.ar.nationality);
      // submit_data.append("en[nationality]", this.data.en.nationality);
      // submit_data.append("ar[currency]", this.data.ar.currency);
      // submit_data.append("en[currency]", this.data.en.currency);
      // submit_data.append("phonecode", this.data.phone_code);

      this.$axios({
        method: "POST",
        url: `country/${this.id}`,
        data: submit_data,
      })
        .then(() => {
          this.$iziToast.success({
            timeout: 2000,
            message: this.$t("addSuccess"),
            position: "bottomRight",
          });
          this.$router.push({ path: "/countries" });
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

    // Get_Data
    getData() {
      this.$axios({
        method: "GET",
        url: `country/${this.id}`,
      }).then((res) => {
        this.data.image = res.data.data.image;
        this.data.ar.name = res.data.data.ar.name;
        this.data.en.name = res.data.data.en.name;
      });
    },
  },

  created() {
    this.getData();
  },
};
</script>
