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
          <!-- START:: INPUT WRAPPER -->
          <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="number"
                class="form-control"
                id="name_input"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.phone"
              />
              <label class="form-label">{{
                $t("settings.contactData.phone")
              }}</label>
            </div>
          </div>
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="email"
                class="form-control"
                id="name_input2"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.email"
              />
              <label class="form-label">{{
                $t("settings.contactData.email")
              }}</label>
            </div>
          </div>
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                id="name_input3"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.whatsapp"
              />
              <label class="form-label">{{
                $t("settings.contactData.whatsapp")
              }}</label>
            </div>
          </div>
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                id="name_input4"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.facebook"
              />
              <label class="form-label">{{
                $t("settings.contactData.facebook")
              }}</label>
            </div>
          </div>
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                id="name_input5"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.twitter"
              />
              <label class="form-label">{{
                $t("settings.contactData.twitter")
              }}</label>
            </div>
          </div>
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <!-- <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                id="name_input6"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.youtube"
              />
              <label class="form-label">{{
                $t("settings.contactData.youtube")
              }}</label>
            </div>
          </div> -->
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <!-- <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                id="name_input7"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.snapchat"
              />
              <label class="form-label">{{
                $t("settings.contactData.snapchat")
              }}</label>
            </div>
          </div> -->
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                id="name_input8"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.instagram"
              />
              <label class="form-label">{{
                $t("settings.contactData.instagram")
              }}</label>
            </div>
          </div>
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                id="name_input8"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.app_store_app"
              />
              <label class="form-label">آب ستور</label>
            </div>
          </div>
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                id="name_input8"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.g_play_app"
              />
              <label class="form-label">جوجل بلاي</label>
            </div>
          </div>
          <!-- END:: INPUT WRAPPER -->
          <!-- <pre>

            {{allData}}
          </pre> -->
          <!-- START:: INPUT WRAPPER -->
          <!-- <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                id="name_input8"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.link_android"
              />
              <label class="form-label">{{
                $t("settings.contactData.link_android")
              }}</label>
            </div>
          </div> -->
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <!-- <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <input
                type="text"
                class="form-control"
                id="name_input8"
                @input="checkIfInputIsEmpty"
                v-model.trim="updateData.link_ios"
              />
              <label class="form-label">{{
                $t("settings.contactData.link_ios")
              }}</label>
            </div>
          </div> -->
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <!-- <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <textarea
                class="form-control"
                id="textarea_1"
                rows="5"
              ></textarea>
              <label class="form-label">{{
                $t("settings.contactData.footer_text_ar")
              }}</label>
            </div>
          </div> -->
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: INPUT WRAPPER -->
          <!-- <div class="col-lg-6 py-0">
            <div class="input_wrapper top_label">
              <textarea
                class="form-control"
                id="textarea_1"
                rows="5"
              ></textarea>
              <label class="form-label">{{
                $t("settings.contactData.footer_text_en")
              }}</label>
            </div>
          </div> -->
          <!-- END:: INPUT WRAPPER -->

          <!-- START:: MAP -->

          <div class="col-12 fadeIn">
            <div class="large-map">
              <div class="input_wrapper top_label">
                <input
                  type="text"
                  class="form-control"
                  id="autocomplete_ar"
                  placeholder=""
                  @click="getAddressAr"
                  v-model="updateData.address"
                />
                <label class="form-label">{{
                  $t("settings.contactData.search")
                }}</label>
              </div>

              <GmapMap
                :center="center"
                :zoom="12"
                map-type-id="terrain"
                style="width: 100%; height: 600px"
              >
                <GmapMarker
                  v-for="(m, index) in markers"
                  :key="index"
                  :position="m.position"
                  :clickable="true"
                  :draggable="true"
                  @drag="updateCoordinates"
                  @click="clickMethod(m)"
                />
              </GmapMap>
            </div>
          </div>
          <!-- END:: MAP -->
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

      // START:: CREATE DATA
      updateData: {
        phone: null,
        email: null,
        whatsapp: null,
        facebook: null,
        twitter: null,
        instagram: null,
        app_store_app: null,
        g_play_app: null,
        address: null,
        lat: null,
        lng: null,
        snapchat: null,
        youtube: null,
        fax: null,
        link_android: null,
        link_ios: null,
      },
      // END:: CREATE DATA

      // START:: MAP
      center: {},
      markers: null,
      coordinates_to_edit: { lat: 0, lng: 0 },
      // END:: MAP
    };
  },

  methods: {
    // START:: UPDATE LOCATION
    updateCoordinates(location) {
      this.coordinates_to_edit = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng(),
      };
    },
    clickMethod(m) {
      this.center = m.position;
    },
    // END:: UPDATE LOCATION

    // ============== Get User Location
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          // this.$axios({
          //   method: "get",
          //   url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyAITrPfT5r_qmCm_8ekZyPmnebGo8o_r18`,
          // })
          //   .then((res) => {
          //     console.log(res.data.results[0].formatted_address);
          //   })
          //   .catch(() => {});

          this.markers = [
            {
              position: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
            },
          ];
          this.center = this.markers[0].position;
          this.coordinates_to_edit.lat = this.center.lat;
          this.coordinates_to_edit.lng = this.center.lng;
        });
      }
    },

    // START:: G-MAP GET ADDRESS
    getAddressAr() {
      var self = this;
      var input = document.getElementById("autocomplete_ar");
      var searchBox = new google.maps.places.SearchBox(input);
      searchBox.addListener("places_changed", function () {
        var places = searchBox.getPlaces();
        if (places.length == 0) {
          return;
        }
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
          bounds.extend(place.geometry.location);
          place.geometry.location.lat();
          place.geometry.location.lng();
          place.formatted_address;
          // self.data.address = place.formatted_address;
          self.center.lat = place.geometry.location.lat();
          self.center.lng = place.geometry.location.lng();
          self.coordinates_to_edit.lat = place.geometry.location.lat();
          self.coordinates_to_edit.lng = place.geometry.location.lng();
          // self.markers[0].position.lat = place.geometry.location.lat();
          // self.markers[0].position.lng = place.geometry.location.lat();
        });
      });
    },
    // START:: G-MAP GET ADDRESS

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
        this.updateData.phone = allData.phone;
        this.updateData.address = allData.address;
        this.updateData.lat = allData.lat;
        this.updateData.lng = allData.lng;
        this.updateData.email = allData.email;
        this.updateData.whatsapp = allData.phone;
        this.updateData.facebook = allData.facebook;
        this.updateData.instagram = allData.instagram;
        this.updateData.twitter = allData.twitter;
        this.updateData.app_store_app = allData.app_store_app;
        this.updateData.g_play_app = allData.g_play_app;

        console.log(res.data.data);
        // this.updateData.fax = allData.lan_number;
        // this.updateData.link_android = allData.link_android;
        // this.updateData.link_ios = allData.link_ios;
        // this.coordinates_to_edit.lat = Number(allData.lat);
        // this.coordinates_to_edit.lng = Number(allData.lng);
        this.markers = [
          {
            position: {
              lat: Number(allData.lat),
              lng: Number(allData.lng),
            },
          },
        ];
        this.center = this.markers[0].position;
      });
    },
    //END:: GET DATA

    // START:: VALIDATE CREATE FORM
    validateCreateForm() {
      this.btnIsLoading = true;

      if (!this.updateData.phone) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("settings.contactData.validation.phone"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.updateData.email) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("settings.contactData.validation.email"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.updateData.whatsapp) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("settings.contactData.validation.whatsapp"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      }
      // else if (!this.updateData.fax) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("settings.contactData.validation.fax"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // }
      else if (!this.updateData.facebook) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("settings.contactData.validation.facebook"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.updateData.twitter) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("settings.contactData.validation.twitter"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.updateData.instagram) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("settings.contactData.validation.instagram"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.updateData.app_store_app) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("settings.contactData.validation.app_store_app"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      } else if (!this.updateData.g_play_app) {
        this.$iziToast.error({
          timeout: 2000,
          message: this.$t("settings.contactData.validation.g_play_app"),
          position: "bottomRight",
        });
        this.btnIsLoading = false;
        return;
      }
      // else if (!this.updateData.snapchat) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("settings.contactData.validation.snapchat"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // } else if (!this.updateData.youtube) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("settings.contactData.validation.youtube"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // } else if (!this.updateData.link_android) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("settings.contactData.validation.link_android"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // } else if (!this.updateData.link_ios) {
      //   this.$iziToast.error({
      //     timeout: 2000,
      //     message: this.$t("settings.contactData.validation.link_ios"),
      //     position: "bottomRight",
      //   });
      //   this.btnIsLoading = false;
      //   return;
      // }
      else {
        const data = new FormData();
        data.append("phone", this.updateData.phone);
        data.append("email", this.updateData.email);
        // data.append("whatsapp", this.updateData.phone);
        data.append("facebook", this.updateData.facebook);
        data.append("twitter", this.updateData.twitter);
        data.append("instagram", this.updateData.instagram);
        data.append("app_store_app", this.updateData.app_store_app);
        data.append("g_play_app", this.updateData.g_play_app);
        // data.append("snapchat", this.updateData.snapchat);
        // data.append("youtube", this.updateData.youtube);
        // data.append("lan_number", this.updateData.fax);
        data.append("address", this.updateData.address);
        data.append("lng", this.coordinates_to_edit.lng);
        data.append("lat", this.coordinates_to_edit.lat);
        // data.append("link_ios", this.updateData.link_ios);
        // data.append("link_android", this.updateData.link_android);
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
            this.$router.push({ path: "/settings/contact" });
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

  created() {
    this.getLocation();
    this.getData();
  },
};
</script>
