// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#bb8a56",
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
