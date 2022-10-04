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
            <!-- Image -->
            <!-- <uplode-image @inputChanged="uplodeImg_1"></uplode-image> -->

            <div class="col-lg-4 py-0">
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

            <div class="col-lg-4 py-0">
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

            <div class="col-lg-4 py-0">
              <div class="input_wrapper top_label">
                <label class="form-label">{{
                  $t("forms.labels.category")
                }}</label>
                <multiselect
                  v-model="data.category"
                  :options="Categories"
                  label="name"
                  track-by="id"
                  placeholder=" "
                  :searchable="true"
                  :allow-empty="true"
                  :show-labels="false"
                >
                </multiselect>
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
      Categories: [],

      // ========== Breadcrumbs
      items: [
        {
          text: this.$t("breadcrumb.mainPage"),
          disabled: false,
          href: "/",
        },
        {
          text: this.$t("breadcrumb.SubCategories.title"),
          disabled: false,
          href: "/home_screen/SubCategories",
        },
        {
          text: this.$t("breadcrumb.SubCategories.edit"),
          disabled: true,
          href: "",
        },
      ],

      // ========== Loading
      btnIsLoading: false,

      // ========== create_data
      data: {
        // image: null,
        ar: { name: null },
        en: { name: null },
        category: "",
      },
    };
  },

  methods: {
    // Uplode Image
    // uplodeImg_1(obj) {
    //   this.data.image = obj;
    // },

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
      } else if (!this.data.category) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.category"),
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
      // submit_data.append("image", this.data.image.img_file);
      submit_data.append("ar[name]", this.data.ar.name);
      submit_data.append("en[name]", this.data.en.name);
      submit_data.append("category_id", this.data.category.id);
      submit_data.append("_method", "patch");

      this.$axios({
        method: "POST",
        url: `subCategory/${this.id}`,
        data: submit_data,
      })
        .then(() => {
          this.$iziToast.success({
            timeout: 2000,
            message: this.$t("addSuccess"),
            position: "bottomRight",
          });
          this.$router.push({ path: "/home_screen/SubCategories" });
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

    // Get Data
    getData() {
      // Main_Data
      this.$axios({
        method: "GET",
        url: `subCategory/${this.id}`,
      }).then((res) => {
        this.data.category = {
          id: res.data.data.category.id,
          name: `${res.data.data.category.ar.name} - ${res.data.data.category.en.name}`,
        };
        this.data.ar.name = res.data.data.ar.name;
        this.data.en.name = res.data.data.en.name;
      });

      // Main_Categories
      this.$axios({
        method: "GET",
        url: `category`,
      }).then((res) => {
        this.Categories = res.data.data.map((item) => {
          return {
            id: item.id,
            name: `${item.ar.name} - ${item.en.name}`,
          };
        });
      });
    },
  },

  created() {
    this.getData();
  },
};
</script>
