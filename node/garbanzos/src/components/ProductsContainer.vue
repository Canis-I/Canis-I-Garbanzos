<template>
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
            <v-card-title>{{ pro.type }}</v-card-title>
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
                >
                  VIEW
                </v-btn>
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text class="text--primary">
            <div>
              <a href="/product" style="text-decoration: none">
                {{ pro.name }}
              </a>
            </div>
            <div>${{ pro.price }}</div>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>
<script>
export default {
  name: "products-container",
  props: {
    products: {},
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
