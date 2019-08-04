import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var packageMap = new Map();
var packageCount = 0;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
