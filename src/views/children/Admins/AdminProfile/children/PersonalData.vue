<template>
  <div class="teacher_data">
    <div class="personal_data_wrapper" v-if="userInfo">
      <div class="row">
        <div class="col-lg-6">
          <div class="input_wrapper top_label only_read my-2">
            <label class="form-label">{{ $t("forms.labels.name") }}</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="userInfo.fullname"
              readonly
            />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="input_wrapper top_label only_read my-2">
            <label class="form-label">{{ $t("forms.labels.phone") }}</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="userInfo.phone"
              readonly
            />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="input_wrapper top_label only_read my-2">
            <label class="form-label">{{ $t("forms.labels.email") }}</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="userInfo.email"
              readonly
            />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="input_wrapper top_label only_read my-2">
            <label class="form-label">{{
              $t("forms.labels.permissions")
            }}</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="userInfo.role"
              readonly
            />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="input_wrapper top_label only_read my-2">
            <label class="form-label">{{ $t("forms.labels.userType") }}</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="userInfo.user_type"
              readonly
            />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="input_wrapper top_label only_read my-2">
            <label class="form-label">{{ $t("forms.labels.is_active") }}</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="isActive"
              readonly
            />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="input_wrapper top_label only_read my-2">
            <label class="form-label">{{ $t("forms.labels.is_ban") }}</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="isBan"
              readonly
            />
          </div>
        </div>

        <!-- ban_reason -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["userInfo"],

  data() {
    return {
      data: {},
    };
  },

  computed: {
    isActive() {
      return this.userInfo.is_active ? this.$t("active") : this.$t("inactive");
    },

    isBan() {
      return this.userInfo.is_ban ? this.$t("ban") : this.$t("inban");
    },
  },

  methods: {},
};
</script>

<style></style>
