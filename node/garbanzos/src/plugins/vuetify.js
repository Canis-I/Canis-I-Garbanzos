// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

Vue.component("font-awesome-icon", FontAwesomeIcon); // Register component globally
library.add(fas); // Include needed icons.

Vue.use(Vuetify, {
  iconfont: "faSvg",
});

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#282828",
        secondary: "#8f663a",
        accent: "#3AE3D6",
        error: "#f44336",
        info: "#42622c",
        success: "#7a904a",
        warning: "#f78012",
      },
    },
  },
};

export default new Vuetify(opts);
