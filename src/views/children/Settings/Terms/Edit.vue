<template>
  <div class="create_wrapper">
    <!-- START:: CARD TITLE -->
    <div class="card-header">
      <h4 class="card-title">{{ $t("CRUD.Update.main_title") }}</h4>
    </div>
    <!-- END:: CARD TITLE -->

    <!-- START:: UPDATE FORM WRAPPER -->
    <form @submit.prevent="validateCreateForm">
      <div class="container">
        <div class="row justify-content-between">
          <!-- START:: UPLOAD IMAGE -->
          <!-- <div class="col-lg-12">
            <uplode-image
              :data_src="updateData.image"
              @inputChanged="uplodeImg_1"
            ></uplode-image>
          </div> -->
          <!-- START:: TITLE ARABIC -->
          <!-- <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                v-model.trim="updateData.title_ar"
              />
              <label for="name_input" class="form-label">{{
                $t("forms.labels.content_ar")
              }}</label>
            </div>
          </div> -->
          <!-- START:: TITLE ENGLISH -->
          <!-- <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                v-model.trim="updateData.title_en"
              />
              <label for="name_input" class="form-label">{{
                $t("forms.labels.content_ar")
              }}</label>
            </div>
          </div> -->
          <!-- START:: CONTENT ARABIC -->
          <div class="col-lg-6 py-0">
            <!-- START:: NAME INPUT -->
            <div class="input_wrapper top_label">
              <ckeditor
                class="form-control"
                id="content_input"
                v-model="updateData.content_ar"
              ></ckeditor>
              <label class="form-label">{{
                $t("forms.labels.content_ar")
              }}</label>
            </div>
            <!-- END:: NAME INPUT -->
          </div>
          <!-- START:: CONTENT ENGLISH -->
          <div class="col-lg-6 py-0">
            <!-- START:: NAME INPUT -->
            <div class="input_wrapper top_label">
              <ckeditor
                class="form-control"
                id="content_input"
                v-model="updateData.content_en"
              ></ckeditor>
              <label class="form-label">{{
                $t("forms.labels.content_en")
              }}</label>
            </div>
            <!-- END:: NAME INPUT -->
          </div>
        </div>
      </div>

      <div class="buttons_wrapper">
        <!-- START:: BUTTON -->
        <button class="button_style_1" :class="btnIsLoading ? 'disabled' : ''">
          {{ $t("forms.submit") }}
          <span class="btn_loader" v-if="btnIsLoading"></span>
        </button>
        <!-- END:: BUTTON -->
      </div>
    </form>
    <!-- END:: UPDATE FORM WRAPPER -->
  </div>
</template>

<script>
export default {
  name: "Update",

  data() {
    return {
      // START:: BUTTON LOADER HANDLING DATA
      btnIsLoading: false,
      // END:: BUTTON LOADER HANDLING DATA

      // START:: SELECTED FILE DATA
      selectedFile: {
        file: null,
        name: null,
        path: null,
      },
      // END:: SELECTED FILE DATA

      // START:: CREATE DATA
      updateData: {
        content_ar: null,
        content_en: null,
      },
      // END:: CREATE DATA
    };
  },

  methods: {
    // START:: CHECK IF INPUT IS EMPTY (SPECIFIC TO ANIMATED PLACEHOLDER INPUTS)
    checkIfInputIsEmpty(e) {
      let inputElement = e.currentTarget;
      if (inputElement.value.length > 0) {
        inputElement.classList.add("not_empty");
      } else {
        inputElement.classList.remove("not_empty");
      }
    },
    // END:: CHECK IF INPUT IS EMPTY (SPECIFIC TO ANIMATED PLACEHOLDER INPUTS)

    //START:: GET DATA
    getData() {
      this.$axios({
        method: "GET",
        url: "setting",
      }).then((res) => {
        let allData = res.data.data;
        this.updateData.content_ar = allData.terms_ar;
        this.updateData.content_en = allData.terms_en;
      });
    },
    //END:: GET DATA

    // START:: VALIDATE CREATE FORM
    validateCreateForm() {
      this.btnIsLoading = true;

      // if (!this.updateData.title_ar) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("forms.validation.title_ar"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // } else if (!this.updateData.title_en) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("forms.validation.title_en"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // } else
      if (!this.updateData.content_ar) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.content_ar"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.updateData.content_en) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.content_en"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else {
        const data = new FormData();
        data.append("terms_ar", this.updateData.content_ar);
        data.append("terms_en", this.updateData.content_en);
        this.$axios({
          method: "post",
          url: "setting",
          data: data,
        })
          .then(() => {
            this.$iziToast.success({
              timeout: 2000,
              message: this.$t("editSuccess"),
              position: "bottomRight",
            });
            this.btnIsLoading = false;
            this.$router.push({ path: "/settings/terms" });
          })
          .catch((err) => {
            this.$iziToast.error({
              timeout: 2000,
              message: err.response.data.message,
              position: "bottomRight",
            });
            this.btnIsLoading = false;
          });
      }
    },
    // END:: VALIDATE CREATE FORM
  },

  mounted() {
    this.getData();
  },
};
</script>
