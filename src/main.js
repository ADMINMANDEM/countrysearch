import Vue from 'vue'
import App from './App.vue'
import VueFab from 'vue-float-action-button'
import * as VueGoogleMaps  from 'vue2-google-maps'

Vue.use(VueGoogleMaps,{
    load: {
        key: 'AIzaSyDhlc0Eu_bi-c18fcstMaUnL83CF-6Xs70',
        libraries: 'places',
    },
})

Vue.config.productionTip = false

Vue.use(VueFab, /* {
  ----------------------
  // opitons Optional Alibaba iconfont icon or MaterialIcons
  iconType: 'MaterialDesign'
  // iconType: 'iconfont'
} */)

new Vue({
  render: h => h(App),
}).$mount('#app')
