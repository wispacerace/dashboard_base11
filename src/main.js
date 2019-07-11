import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var packageMap = new Map();
var packageCount = 0;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
