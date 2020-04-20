import Vue from 'vue';
import Vuetify, { colors } from 'vuetify/lib';
import pt from 'vuetify/src/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { pt },
      current: 'pt',
    },
    theme: {
      themes: {
        light: {
          primary: colors.red.base
        }
      }
    }
});
