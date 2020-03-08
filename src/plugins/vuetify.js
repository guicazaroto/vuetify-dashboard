// import '@fontawesome/fontawesome/css/all.css'
// import 'material-design-icons-icofont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    light: {
      background: colors.blue.accent2,
    },
    dark: {
      background: colors.blue
    }
  }
});
