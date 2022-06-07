<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item
              v-for="(img, index) in images"
              :key="index"
              :src="'http://localhost:8000' + img"
            />
          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-0">{{ product.title }}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">
                ${{ product.price }}
                <del style="" class="subtitle-1 font-weight-thin">
                  ${{ discount }}
                </del>
              </p>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              {{ product.detail }}
            </p>
            <p class="title">Cantidad</p>

            <input style="width: 100px" v-model="amount" type="number" />
            <br />
            <br />
            <v-btn
              class="primary white--text"
              outlined
              tile
              dense
              :href="`/buy/${product.id}/${amount}`"
            >
              Comprar
            </v-btn>
            <!--            <v-btn class="ml-4" outlined tile>Añadir al carrito</v-btn>-->
          </div>

          <div></div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-xs-12 col-md-12">
            <v-tabs>
              <v-tab>Descripción</v-tab>
              <v-tab-item>
                <p class="pt-10 subtitle-1 font-weight-thin">
                  {{ product.spec }}
                </p>
              </v-tab-item>
            </v-tabs>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import types from "@/store/types";

export default {
  name: "ProductBase",
  beforeMount() {
    const id = this.$route.params["id"];
    this.requestDesc(id);
  },
  mounted() {
    this.breadcrums.push({
      text: this.product.category,
      disabled: false,
      href: "breadcrumbs_clothing",
    });
  },
  data: () => ({
    rating: 4.5,
    breadcrums: [
      {
        text: "Inicio",
        disabled: false,
        href: "breadcrumbs_home",
      },
    ],
    amount: 1,
  }),
  computed: {
    discount() {
      const min = 1;
      const max = 5;

      const rand = Math.random() * (max - min) + min;

      return this.product.price + Math.round(rand);
    },
    images() {
      let img = [];
      img.push(this.product.image);
      this.product.other_images.map((e) => img.push(e.image));
      return img;
    },
    ...mapState({
      product: (state) => state.products.active,
    }),
  },
  methods: {
    ...mapActions([types.requestDesc]),
  },
};
</script>
