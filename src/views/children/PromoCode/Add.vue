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
            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.code"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.code")
                }}</label>
              </div>
            </div>

            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="number"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.use"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.use_code")
                }}</label>
              </div>
            </div>

            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="number"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.discount"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.discount")
                }}</label>
              </div>
            </div>

            <!-- START:: DATE PICKER INPUT -->
            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label date_input">
                <label class="form-label">{{
                  $t("forms.labels.start_date")
                }}</label>
                <v-menu
                  v-model="dateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="data.start_date"
                      label="Picker without buttons"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="data.start_date"
                    @input="dateMenu = false"
                    :allowed-dates="disablePastDates"
                    no-title
                  ></v-date-picker>
                </v-menu>
              </div>
            </div>
            <!-- END:: DATE PICKER INPUT -->

            <!-- START:: DATE PICKER INPUT -->
            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label date_input">
                <label class="form-label">{{
                  $t("forms.labels.end_date")
                }}</label>
                <v-menu
                  v-model="dateMenu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="data.end_date"
                      label="Picker without buttons"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="data.end_date"
                    @input="dateMenu2 = false"
                    :allowed-dates="disablePastDates2"
                    no-title
                  ></v-date-picker>
                </v-menu>
              </div>
            </div>
            <!-- END:: DATE PICKER INPUT -->
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
  name: "Create",

  data() {
    return {
      dateMenu: false,
      dateMenu2: false,
      // ========== Breadcrumbs
      items: [
        {
          text: this.$t("breadcrumb.mainPage"),
          disabled: false,
          href: "/",
        },
        {
          text: this.$t("breadcrumb.promo_code.title"),
          disabled: false,
          href: "/promo-code",
        },
        {
          text: this.$t("breadcrumb.promo_code.add"),
          disabled: true,
          href: "",
        },
      ],

      // ========== Loading
      btnIsLoading: false,

      // ========== create_data
      data: {
        code: null,
        use: null,
        discount: null,
        end_date: null,
        start_date: null,
      },
    };
  },

  methods: {
    disablePastDates(val) {
      return val >= new Date().toISOString().substr(0, 10);
    },
    disablePastDates2(val) {
      return val >= new Date(this.data.start_date).toISOString().substr(0, 10);
    },

    // Validate Data
    validateCreateForm() {
      this.btnIsLoading = true;

      if (!this.data.code) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.code"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.use) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.use"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.discount) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.discount"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.start_date) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.start_date"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.end_date) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.end_date"),
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
      submit_data.append("code", this.data.code);
      submit_data.append("number_of_use", this.data.use);
      submit_data.append("start_date", this.data.start_date);
      submit_data.append("expire_date", this.data.end_date);
      submit_data.append("discount_percentage", this.data.discount);

      this.$axios({
        method: "POST",
        url: "coupon",
        data: submit_data,
      })
        .then(() => {
          this.$iziToast.success({
            timeout: 2000,
            message: this.$t("addSuccess"),
            position: "bottomRight",
          });
          this.$router.push({ path: "/promoCode" });
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

  created() {},
};
</script>
