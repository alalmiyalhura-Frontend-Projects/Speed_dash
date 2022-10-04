<template>
  <div class="profile_wrapper most_profile">
    <div class="profile_header_wrapper custom_card">
      <vue-particles
        color="#6c98a2"
        :particleOpacity="0.7"
        :particlesNumber="180"
        shapeType="circle"
        :particleSize="4"
        linesColor="#6c98a2"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.3"
        :linesDistance="100"
        :moveSpeed="4"
        :hoverEffect="true"
        :clickEffect="true"
        hoverMode="repulse"
        clickMode="push"
      >
      </vue-particles>

      <div class="row" v-if="allData">
        <div class="col-sm-12">
          <div class="divider">
            <h4>{{ $t("products.single.images") }}</h4>
            <hr
              role="separator"
              aria-orientation="horizontal"
              class="v-divider theme--dark"
            />
          </div>
        </div>

        <div
          class="col-lg-4 widget"
          v-for="img in allData.images"
          :key="img.id"
        >
          <div class="card-image after">
            <img :src="img.image_url" />
          </div>
        </div>

        <div class="col-sm-12">
          <div class="divider">
            <h4>{{ $t("products.single.productInfo") }}</h4>
            <hr
              role="separator"
              aria-orientation="horizontal"
              class="v-divider theme--dark"
            />
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.productName") }}</h3>
            <h4>{{ allData.name }}</h4>
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.productDesc") }}</h3>
            <h4>{{ allData.desc }}</h4>
          </div>
        </div>

        <div class="col-lg-2 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.rate") }}</h3>
            <h4>{{ allData.rate }}</h4>
          </div>
        </div>
        <div class="col-lg-2 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.reviewCount") }}</h3>
            <h4>{{ allData.reviews.length }}</h4>
          </div>
        </div>

        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.category") }}</h3>
            <h4>
              {{ allData.category.ar.name }} - {{ allData.category.en.name }}
            </h4>
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.subCategory") }}</h3>
            <h4>
              {{ allData.subCategory.ar.name }} -
              {{ allData.subCategory.en.name }}
            </h4>
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.productStatus") }}</h3>
            <h4>
              {{ allData.productStatus.ar.name }} -
              {{ allData.productStatus.en.name }}
            </h4>
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.shippingWay") }}</h3>
            <h4>
              {{ allData.shippingWay.ar.name }} -
              {{ allData.shippingWay.en.name }}
            </h4>
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.country") }}</h3>
            <h4>
              {{ allData.country.ar.name }} -
              {{ allData.country.en.name }}
            </h4>
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.city") }}</h3>
            <h4>
              {{ allData.city.ar.name }} -
              {{ allData.city.en.name }}
            </h4>
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.sizePrice") }}</h3>
            <h4>{{ allData.product_price }}</h4>
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.qty") }}</h3>
            <h4>{{ allData.qty }}</h4>
          </div>
        </div>

        <div class="col-sm-12" v-if="allData.is_bid == true">
          <div class="divider">
            <h4>{{ $t("products.single.bid") }}</h4>
            <hr
              role="separator"
              aria-orientation="horizontal"
              class="v-divider theme--dark"
            />
          </div>
        </div>

        <template v-if="allData.is_bid == true">
          <div class="col-lg-4 widget">
            <div class="card-widget after">
              <h3>{{ $t("products.single.start_date") }}</h3>
              <h4>{{ allData.start_bid_date }}</h4>
            </div>
          </div>
          <div class="col-lg-4 widget">
            <div class="card-widget after">
              <h3>{{ $t("products.single.end_date") }}</h3>
              <h4>{{ allData.end_bid_date }}</h4>
            </div>
          </div>
          <div class="col-lg-4 widget">
            <div class="card-widget after">
              <h3>{{ $t("products.single.time_remaining") }}</h3>
              <h4 class="time">
                <span
                  ><small>{{ $t("products.single.second") }}</small>
                  {{ allData.time_remaining.second }}</span
                >
                <span
                  ><small>{{ $t("products.single.minute") }}</small>
                  {{ allData.time_remaining.minute }}</span
                >
                <span
                  ><small>{{ $t("products.single.hour") }}</small>
                  {{ allData.time_remaining.hour }}</span
                >
                <span
                  ><small>{{ $t("products.single.day") }}</small>
                  {{ allData.time_remaining.day }}</span
                >
                <span
                  ><small>{{ $t("products.single.month") }}</small>
                  {{ allData.time_remaining.month }}</span
                >
              </h4>
            </div>
          </div>
          <div class="col-lg-4 widget">
            <div class="card-widget after">
              <h3>{{ $t("products.single.bid_value") }}</h3>
              <h4>{{ allData.bid_value }}</h4>
            </div>
          </div>
          <div class="col-lg-4 widget">
            <div class="card-widget after">
              <h3>{{ $t("products.single.last_price") }}</h3>
              <h4>{{ allData.last_bid_price }}</h4>
            </div>
          </div>
        </template>

        <div class="col-sm-12">
          <div class="divider">
            <h4>{{ $t("products.single.userInfo") }}</h4>
            <hr
              role="separator"
              aria-orientation="horizontal"
              class="v-divider theme--dark"
            />
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.clientName") }}</h3>
            <h4>{{ allData.user.username }}</h4>
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.clientPhone") }}</h3>
            <h4>{{ allData.user.phone }}</h4>
          </div>
        </div>
        <div class="col-lg-4 widget">
          <div class="card-widget after">
            <h3>{{ $t("products.single.clientEmail") }}</h3>
            <h4>{{ allData.user.email }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      allData: null,
    };
  },

  methods: {
    getData() {
      this.$axios({
        method: "GET",
        url: `product/${this.id}`,
      }).then((res) => {
        this.allData = res.data.data;
      });
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style>
.card-image img {
  width: 160px;
  height: 160px;
  border-radius: 20px;
}
</style>
