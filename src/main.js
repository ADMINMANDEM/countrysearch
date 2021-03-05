import Vue from 'vue'
import App from './App.vue'
import VueFab from 'vue-float-action-button'
import * as VueGoogleMaps  from 'vue2-google-maps'
import router from './router'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps,{
    load: {
        key: 'AIzaSyDhlc0Eu_bi-c18fcstMaUnL83CF-6Xs70',
        libraries: 'places',
    },
})

Vue.use(VueMaterial)

Vue.use(VueFab)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
