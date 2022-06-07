<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title style="width: 350px">
        <a href="/" class="white--text" style="text-decoration: none"
          ><v-icon>mdi-truck</v-icon>&nbsp;ShipIT</a
        >
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn v-on="on" icon>
        <v-badge content="2" value="2" color="green" overlap>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn v-on="on" href="/cart" icon>
        <v-badge content="2" value="2" color="green" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-content>
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
    </v-content>
    <router-view />
  </v-app>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "MainLayout",
  data() {
    return {
      activeBtn: 1,
    };
  },
  methods: {
    on() {},
  },
  computed: {
    ...mapState({
      categories: (state) => state.app.categories,
    }),
  },
};
</script>
