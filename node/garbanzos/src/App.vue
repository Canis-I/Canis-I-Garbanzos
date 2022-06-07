<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import types from "@/store/types";

export default {
  name: "App",
  props: ["test"],
  mounted() {
    this.requestAll();
  },
  methods: {
    ...mapActions([types.requestAll]),
  },
};
</script>
