import Vue from 'vue'
import Main from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Main),
}).$mount('#main')
