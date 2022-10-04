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
            <!-- Image -->
            <uplode-image
              :data_src="data.image"
              @inputChanged="uplodeImg_1"
            ></uplode-image>

            <!-- Name -->
            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.name"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.name")
                }}</label>
              </div>
            </div>

            <!-- Phone -->
            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="number"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.phone"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.phone")
                }}</label>
              </div>
            </div>

            <!-- Email -->
            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="email"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.email"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.email")
                }}</label>
              </div>
            </div>

            <!-- Password -->
            <div class="col-lg-12 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="password"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model.trim="data.password"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.password")
                }}</label>
              </div>
            </div>

            <!-- Country && City -->
            <!-- <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <label class="form-label">{{
                  $t("forms.labels.country")
                }}</label>
                <multiselect
                  @select="getCities"
                  v-model="data.country"
                  :options="countries"
                  label="name"
                  track-by="id"
                  placeholder=" "
                  :searchable="true"
                  :allow-empty="false"
                  :show-labels="false"
                >
                </multiselect>
              </div>
            </div>
            <div class="col-lg-6 py-0">
              <div
                class="input_wrapper top_label"
                :class="{ disabled: !data.country }"
              >
                <label class="form-label">{{ $t("forms.labels.city") }}</label>
                <multiselect
                  v-model="data.city"
                  :options="cities"
                  label="name"
                  track-by="id"
                  placeholder=" "
                  :searchable="true"
                  :allow-empty="false"
                  :show-labels="false"
                >
                </multiselect>
              </div>
            </div> -->

            <!-- Is_Ban -->
            <div class="col-lg-6 py-0">
              <v-checkbox
                @change="!data.is_ban ? (data.ban_reason = '') : ''"
                :label="$t('forms.labels.is_ban')"
                v-model="data.is_ban"
                color="indigo lighten-2"
              ></v-checkbox>
            </div>

            <!-- Is_Active -->
            <div class="col-lg-6 py-0">
              <v-checkbox
                :label="$t('forms.labels.is_active')"
                v-model="data.is_active"
                color="indigo lighten-2"
              ></v-checkbox>
            </div>

            <!-- Ban_Reason -->
            <div
              class="input_wrapper top_label"
              :class="{ disabled: !data.is_ban }"
            >
              <label for="textarea_1" class="form-label">{{
                $t("forms.labels.ban_reason")
              }}</label>
              <textarea
                v-model="data.ban_reason"
                class="form-control"
                rows="5"
              ></textarea>
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
          text: this.$t("breadcrumb.clients.title"),
          disabled: false,
          href: "/clients",
        },
        {
          text: this.$t("breadcrumb.clients.edit"),
          disabled: true,
          href: "",
        },
      ],

      // ========== Loading
      btnIsLoading: false,

      // ========== create_data
      data: {
        image: null,
        name: null,
        phone: null,
        email: null,
        permission: null,
        password: null,
        is_ban: false,
        is_active: false,
        ban_reason: "",
      },

      // ========== Fixed Data
      countries: [],
      cities: [],
      permissions: [{ id: 1, name: "pemissionTest" }],
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

      if (!this.data.name) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.name"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.email) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.email"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.data.phone) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("forms.validation.phone"),
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
      if (this.data.image.img_file) {
        submit_data.append("image", this.data.image.img_file);
      }
      submit_data.append("fullname", this.data.name);
      submit_data.append("phone", this.data.phone);
      submit_data.append("email", this.data.email);
      // submit_data.append("role_id", this.data.permission.id);
      if (this.data.password) {
        submit_data.append("password", this.data.password);
      }
      submit_data.append("is_ban", +this.data.is_ban);
      submit_data.append("is_active", +this.data.is_active);
      submit_data.append("ban_reason", this.data.ban_reason);
      submit_data.append("_method", "PATCH");

      console.log(this.data.is_active);

      this.$axios({
        method: "POST",
        url: `client/${this.id}`,
        data: submit_data,
      })
        .then(() => {
          this.$iziToast.success({
            timeout: 2000,
            message: this.$t("addSuccess"),
            position: "bottomRight",
          });
          this.$router.push({ path: "/clients" });
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

    // ============ Get Main Data
    getMainData() {
      // Permission
      // this.$axios({
      //   method: "GET",
      //   url: `permission`,
      // }).then((res) => {
      //   this.permissions = res.data.data.map((item) => {
      //     return {
      //       id: item.id,
      //       name: `${item.ar.name} - ${item.en.name}`,
      //     };
      //   });
      // });

      //Get Data
      this.$axios({
        method: "GET",
        url: "client/" + this.id,
      }).then((res) => {
        let myData = res.data.data;
        this.data.image = myData.image;
        this.data.name = myData.username;
        this.data.email = myData.email;
        this.data.phone = myData.phone;
        this.data.is_active = myData.is_active;
        this.data.is_ban = myData.is_ban;
        this.data.ban_reason = myData.ban_reason;
      });

      // Country
      this.$axios({
        method: "GET",
        url: `country`,
      }).then((res) => {
        this.countries = res.data.data.map((item) => {
          return {
            id: item.id,
            name: `${item.ar.name} - ${item.en.name}`,
          };
        });
      });

      // AdminData
      this.$axios({
        method: "GET",
        url: `admin/${this.id}`,
      }).then((res) => {
        console.log(res.data.data);
        this.data.image = res.data.data.image;
        this.data.name = res.data.data.fullname;
        this.data.phone = res.data.data.phone;
        this.data.email = res.data.data.email;
        // this.data.permission = res.data.data.image;
        // this.data.password = res.data.data.password;
        this.data.is_ban = res.data.data.is_ban;
        this.data.is_active = res.data.data.is_active;
        this.data.ban_reason = res.data.data.ban_reason;
      });
    },

    // ============ Get Run Time Data
    getCities() {
      this.$axios({
        method: "GET",
        url: `city`,
      }).then((res) => {
        this.cities = res.data.data.map((item) => {
          return {
            id: item.id,
            name: `${item.ar.name} - ${item.en.name}`,
          };
        });
      });
    },
  },

  created() {
    this.getMainData();
  },
};
</script>
