import Vue from 'vue'
import App from './App.vue'
import VueFab from 'vue-float-action-button'
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
