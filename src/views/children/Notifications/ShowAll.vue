<template>
  <div class="wrraper">
    <!-- Start Breadcrumb -->
    <Breadcrumb :items="items" />
    <!-- End Breadcrumb -->

    <!-- Start Statistics Card-->
    <div class="row mb-5">
      <div class="wrraper">
        <stats-card :number="statisticsItem.number"></stats-card>
      </div>
    </div>
    <!-- End Statistics Card-->

    <!-- Start Main Section -->
    <main>
      <v-data-table
        class="elevation-1 thumb"
        :headers="headers"
        :items="rows"
        :search="search"
        :loading="lodaing"
        :loading-text="$t('table.loadingData')"
        v-model="selected"
        show-select
        :single-select="singleSelect"
        item-key="id"
        :items-per-page="paginations.items_per_page"
        hide-default-footer
      >
        <!-- ================== You Can use any slots you want ================== -->
        <!-- Select no data State -->
        <template v-slot:no-data>
          {{ $t("table.noData") }}
        </template>

        <!-- Select actions-->
        <template v-slot:[`item.actions`]="{ item }">
          <div class="_actions">
            <v-icon class="show" small @click="showItem(item)">
              fal fa-eye
            </v-icon>
            <v-icon class="delete" small @click="deleteItem(item)">
              fal fa-trash
            </v-icon>
          </div>
        </template>

        <!-- ======================== Start Top Section ======================== -->
        <template v-slot:top>
          <!-- Delete dialog -->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5 justify-center">{{
                $t("table.deletedialog.areYouSure")
              }}</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#1B5E20" @click="deleteItemConfirm">{{
                  $t("table.deletedialog.ok")
                }}</v-btn>
                <v-btn color="#F44336" @click="dialogDelete = false">{{
                  $t("table.deletedialog.cancel")
                }}</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete_selected" max-width="500px">
            <v-card>
              <v-card-title class="text-h5 justify-center">{{
                $t("table.deletedialog.areYouSure")
              }}</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#F44336" @click="dialogDelete_selected = false">{{
                  $t("table.deletedialog.cancel")
                }}</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- Add & Delete -->
          <v-row>
            <v-col cols="12" sm="8">
              <!-- Search -->
              <v-text-field
                v-model="search"
                :label="$t('table.search')"
                class="mx-4"
                append-icon="mdi-magnify"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <section class="table-buttons">
                <!-- Add -->
                <button
                  @click="addItem"
                  to="/notifications/add"
                  class="button_add_new ml-5"
                >
                  <i class="fas fa-plus"></i>&nbsp; {{ $t("table.addNew") }}
                </button>

                <!-- Delete -->
                <button
                  type="button"
                  class="button_delete ml-5"
                  v-if="selected.length > 0"
                  @click="deleteSelected"
                >
                  <i class="far fa-trash-alt"></i>&nbsp;
                  {{ $t("table.deleteSelected") }}
                </button>
              </section>
            </v-col>
          </v-row>
        </template>
        <!-- ======================== End Top Section ======================== -->
      </v-data-table>
    </main>
    <!-- End Main Section -->

    <!-- Start Pagination -->
    <template>
      <div class="pagination_container text-center mb-5">
        <v-pagination
          circle
          v-model="paginations.current_page"
          :length="paginations.last_page"
          :total-visible="6"
        ></v-pagination>
      </div>
    </template>
    <!-- End Pagination -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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
          text: this.$t("breadcrumb.notifications.all"),
          disabled: true,
          href: "",
        },
      ],

      // ========== Statistics
      statisticsItem: {},

      // ========== Top Section
      search: "",

      // ========== dialog Status
      dialogDelete: false,
      dialogDelete_selected: false,
      itemtoDelete: null,

      // ========== Model
      model_1: {
        show_model: false,
        model_img_src: "",
      },

      // ========== Body Section
      calories: "",

      // ========== Your Data
      rows: [], // injected in created

      // ========== elected Data
      selected: [],
      singleSelect: false,

      // ========== pagination
      paginations: {
        current_page: 1,
        last_page: 1,
        items_per_page: 20,
      },

      // ========== Loding
      lodaing: false,
    };
  },

  watch: {
    [`paginations.current_page`]() {
      this.setRows();
    },
  },

  computed: {
    ...mapGetters({
      lang: "lang_module/lang",
    }),

    headers() {
      return [
        {
          text: "عنوان الإشعار",
          align: "center",
          value: "title",
          sortable: false,
        },
        {
          text: "محتوي الإشعار",
          align: "center",
          value: "body",
          sortable: false,
        },
        {
          text: "وقت الإشعار",
          align: "center",
          value: "created_time",
          sortable: false,
        },
        {
          text: "التحكم",
          value: "actions",
          sortable: false,
          align: "center",
        },
      ];
    },
  },

  methods: {
    addItem() {
      this.$router.push({ path: "/notifications/add" });
    },
    // ===== Search Method =====
    filterClick(word) {
      if (!this.lodaing) {
        this.search = word;
        this.helper_filterSearch();
      }
    },

    // ==================== Start CRUD ====================
    showItem(item) {
      this.$router.push({ path: "/notifications/show/" + item.id });
    },
    // ===== Delete
    deleteItem(item) {
      this.dialogDelete = true;
      this.itemtoDelete = item;
    },
    deleteItemConfirm() {
      this.$axios({
        method: "DELETE",
        url: `notification/${this.itemtoDelete.id}`,
      })
        .then(() => {
          this.rows = this.rows.filter((item) => {
            return item.id != this.itemtoDelete.id;
          });
          this.dialogDelete = false;
          this.$iziToast.success({
            timeout: 2000,
            message: this.$t("deleteSuccess"),
            position: "bottomRight",
          });
        })
        .catch((err) => {
          this.dialogDelete = false;
          this.$iziToast.error({
            timeout: 2000,
            message: err.response.data.message,
            position: "bottomRight",
          });
        });
    },
    deleteSelected() {
      this.dialogDelete_selected = true;
    },
    
    // ==================== End CRUD ====================

    // Set Rows
    setRows() {
      this.lodaing = true;
      this.$axios({
        method: "GET",
        url: "notification",
        params: { page: this.paginations.current_page },
      })
        .then((res) => {
          this.paginations.last_page = res.data.meta.last_page;
          this.paginations.items_per_page = res.data.meta.per_page;

          this.rows = res.data.data;
          console.log(this.rows);

          this.statisticsItem.number = res.data.meta.total;

          this.lodaing = false;
        })
        .catch((err) => {
          this.lodaing = false;
        });
    },
  },

  // ======= hooks
  created() {
    // Set Rows
    this.setRows();
  },
};
</script>

<style lang="scss" scoped></style>
