<template>
  <div class="create_wrapper ">
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
            <!-- Title -->
            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model="data.title"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.title")
                }}</label>
              </div>
            </div>

            <!-- Desc -->
            <div class="col-lg-6 py-0">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  @input="helper_checkIfInputIsEmpty"
                  v-model="data.body"
                />
                <label for="name_input" class="form-label">{{
                  $t("forms.labels.content")
                }}</label>
              </div>
            </div>

            <!-- <code>
              <pre>
                  {{ data.client }}
                </pre
              >
            </code> -->

            <!-- Is_Active -->
            <v-radio-group v-model="selectRadioBTN" mandatory>

              <div class="row">

                <div class="col-lg-6 py-1">
                  <v-radio
                    :label="$t('sendToAll')"
                    value="all"
                    color="indigo lighten-5"
                  ></v-radio>
                </div>

                <div class="col-lg-6 py-1">
                  <v-radio
                    :label="$t('selectUsers')"
                    value="selectUsers"
                    color="indigo lighten-5"
                  ></v-radio>
                </div>
              </div>
            </v-radio-group>

            <!-- Select -->
            <div class="col-lg-12 fadeIn py-0" v-if="selectRadioBTN == 'selectUsers'">
              <div class="input_wrapper top_label users_select">
                <label class="form-label">{{
                  $t("breadcrumb.clients.title")
                }}</label>
                <multiselect
                  v-model="data.client"
                  :options="rows"
                  label="username"
                  track-by="id"
                  placeholder=" "
                  multiple
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
          <button
            class="button_style_1"
            :class="btnIsLoading ? 'disabled' : ''"
          >
            {{ $t("send") }}
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
        {
          text: this.$t("breadcrumb.notifications.add"),
          disabled: true,
          href: "",
        },
      ],

      // ========== Loading
      btnIsLoading: false,

      // ========== pagination
      paginations: {
        current_page: 1,
        last_page: 1,
        items_per_page: 20,
      },
      // ========== Client Data
      data: {
        client: null,
        title: null,
        body: null,
      },
      selectRadioBTN: null,
      rows: [],
    };
  },

  methods: {
    // Validate Data
    validateCreateForm() {
      this.btnIsLoading = true;
      this.submitData();
    },

    // Set Rows
    getClients() {
      this.lodaing = true;
      this.$axios({
        method: "GET",
        url: "help-services?type=client",
      })
        .then((res) => {

          this.rows = res.data.data;
          console.log(this.rows);
        })
        .catch((err) => {});
    },

    // Submit Data
    submitData() {
      const submit_data = new FormData();
      submit_data.append("title", this.data.title);
      submit_data.append("body", this.data.body);
      if (this.selectRadioBTN != "all") {
        this.data.client.forEach((user, index) => {
          submit_data.append(`user_list[${index}]`, user.id);
        });
      } else {
        submit_data.append("user_id", "all");
      }
      this.$axios({
        method: "POST",
        url: "notification",
        data: submit_data,
      })
        .then(() => {
          this.$iziToast.success({
            timeout: 2000,
            message: this.$t("addSuccess"),
            position: "bottomRight",
          });
          this.$router.push({ path: "/notifications" });
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
    this.getClients();
  },
};
</script>