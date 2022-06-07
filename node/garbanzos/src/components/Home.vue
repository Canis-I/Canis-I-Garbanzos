<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(slide, index) in carousel"
        :key="index"
        :src="'http://localhost:8000' + slide.image"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>{{ slide.title }}</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container class="col-md-9 col-sm-9 col-xs-12">
      <v-breadcrumbs class="pb-0" :items="breadcrums" />

      <v-row dense>
        <v-col cols="12" sm="8" class="pl-6 pt-6">
          <small>Showing 1-12 of 200 products</small>
        </v-col>
        <v-col cols="12" sm="4">
          <v-select
            class="pa-0"
            v-model="select"
            :items="options"
            style="margin-bottom: -20px"
            outlined
            dense
          ></v-select>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <div class="row text-center">
        <div
          class="col-md-3 col-sm-6 col-xs-12"
          :key="pro.id"
          v-for="pro in products"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="600">
              <v-img
                class="white--text align-end"
                :aspect-ratio="16 / 9"
                height="200px"
                :src="pro.image"
              >
                <v-card-title>{{ pro.type }} </v-card-title>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%"
                  >
                    <v-btn
                      v-if="hover"
                      :href="'/garbanzos_product/' + pro.id"
                      class=""
                      outlined
                      >VIEW</v-btn
                    >
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="text--primary">
                <div>
                  <a href="/product" style="text-decoration: none">{{
                    pro.name
                  }}</a>
                </div>
                <div>${{ pro.price }}</div>
              </v-card-text>
            </v-card>
          </v-hover>
        </div>
      </div>
      <div class="text-center mt-12">
        <v-pagination v-model="page" :length="products.length / 10" />
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import types from "@/store/types";

export default {
  name: "ContainerHome",
  mounted() {
    this.requestCarousel();
  },
  data() {
    return {
      activeBtn: 1,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      range: [0, 10000],
      select: "Popularity",
      options: [
        "Default",
        "Popularity",
        "Relevance",
        "Price: Low to High",
        "Price: High to Low",
      ],
      page: 1,
      breadcrums: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
      ],
      min: 0,
      max: 10000,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.app.products,
      carousel: (state) => state.carousel,
    }),
  },
  methods: {
    ...mapActions([types.requestCarousel]),
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
