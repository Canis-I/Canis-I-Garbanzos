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
                <!--<del style="" class="subtitle-1 font-weight-thin">{{ product.price }}</del>-->
              </p>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              {{ product.detail }}
            </p>
            <p class="title">Tamaño</p>
            <v-radio-group v-model="row" row>
              <v-radio label="XS" value="XS"></v-radio>
              <v-radio label="S" value="s"></v-radio>
              <v-radio label="M" value="m"></v-radio>
              <v-radio label="L" value="l"></v-radio>
              <v-radio label="XL" value="xl"></v-radio>
            </v-radio-group>
            <p class="title">Cantidad</p>

            <v-text-field
              outlined
              style="width: 100px"
              :value="1"
              dense
            ></v-text-field>
            <v-btn class="primary white--text" outlined tile dense>
              <v-icon>mdi-cart</v-icon>
              Comprar
            </v-btn>
            <v-btn class="ml-4" outlined tile>Añadir al carrito</v-btn>
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
              <v-tab-item>
                <p class="pt-10 subtitle-1 font-weight-thin">test test test</p>
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
    row: "",
    rating: 4.5,
    breadcrums: [
      {
        text: "Inicio",
        disabled: false,
        href: "breadcrumbs_home",
      },
    ],
    item: 5,
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Lorem ipsum dolor?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
          "\n",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title:
          'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Lorem ipsum dolor",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Lorem ipsum dolor",
        subtitle: "",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Lorem ipsum dolor",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  }),
  computed: {
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
