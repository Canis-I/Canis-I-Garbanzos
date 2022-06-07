<template>
  <v-app id="inspire">
    <v-main>
      <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
        <a href="/" class="v-btn">
          <span>Inicio</span>
        </a>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <span>Categorías</span>
            </v-btn>
          </template>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item
              v-for="(item, index) in categories"
              :key="index"
              :href="'/garbanzos_shop/' + index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu>
        <v-btn href="/blog">
          <span>Blog</span>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
    <router-view />
  </v-app>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "MainLayout",
  data: () => ({
    activeBtn: 1,
    on: 0,
  }),
  computed: {
    ...mapState({
      categories: (state) => state.app.categories,
    }),
  },
};
</script>
