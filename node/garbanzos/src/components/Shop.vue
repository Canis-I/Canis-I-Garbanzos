<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <v-card outlined>
            <v-card-title>Filtros</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview
                :items="fixed"
                :open="[1]"
                :active="active"
                :selected-color="'#fff'"
                @update:active="onFilter"
                activatable
                open-on-click
                dense
              ></v-treeview>
            </template>
            <v-divider></v-divider>
            <v-card-title>Price</v-card-title>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              :height="10"
              class="align-center"
              dense
            ></v-range-slider>
            <v-row class="pa-2" dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[0]"
                  label="Min"
                  outlined
                  dense
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">TO</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[1]"
                  label="Max"
                  outlined
                  dense
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>

          <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>Mostrando 1-10 de {{ products.length }} productos</small>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <products-container :products="search" v-if="isSearch" />
          <products-container :products="products" v-else />

          <div class="text-center mt-12">
            <v-pagination v-model="page" :length="pagination"></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ProductsContainer from "@/components/ProductsContainer";

export default {
  name: "ShopLayout",
  components: { ProductsContainer },
  beforeMount() {
    const params = this.$route.params;
    let route = params["id"];

    if (route === undefined) {
      if (params["text"] !== undefined) {
        route = params["text"];
        this.isSearch = true;
      } else {
        route = false;
      }
    }

    this.route = route;
  },
  data: () => ({
    range: [0, 10000],
    select: "Popularity",
    page: 1,
    pushed: false,
    isSearch: false,
    breadcrums: [
      {
        text: "Inicio",
        disabled: false,
        href: "/",
      },
    ],
    min: 0,
    max: 10000,
  }),
  methods: {
    onFilter(cat) {
      console.debug(cat[0]);
      this.$router.push(`/garbanzos_shop/${cat[0] - 1}`);
    },
  },
  computed: {
    pagination() {
      return Math.round(this.products.length / 10) + 1;
    },
    active() {
      let ret = [];
      if (this.route.match(/\d+/) !== null) {
        ret = [this.route];
      }

      console.log(ret);
      return ret;
    },
    search() {
      const keyword = this.route;
      let arr = this.products;

      let items = [];
      arr.forEach((e) => {
        if (e.title.toLowerCase().includes(keyword.toLowerCase())) {
          items.push(e);
        }
      });

      return items;
    },
    fixed() {
      let items = [];

      this.categories.map((e) => (e.name = e.title));
      this.categories.forEach((e) => items.push(e));

      return items;
    },
    ...mapState({
      products: (state) => state.app.products,
      categories: (state) => state.app.categories,
    }),
  },
  watch: {
    categories() {
      if (!this.pushed && this.route) {
        if (this.route.match(/\d+/) === null) {
          this.breadcrums.push({
            text: "Buscar",
            disabled: true,
            href: "#",
          });
        } else {
          this.breadcrums.push({
            text: this.categories[this.route].title,
            disabled: true,
            href: "#",
          });
        }

        this.pushed = true;
      }
    },
  },
};
</script>
