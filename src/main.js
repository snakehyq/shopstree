import Vue from 'vue'
import App from './App.vue'

// 导入base.scss
import 'assets/css/base.scss'
// 导入路由router
import router from './router'
// 导入store
import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
