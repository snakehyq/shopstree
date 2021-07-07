import Vue from 'vue'
import App from './App.vue'

// 导入base.scss
import 'assets/css/base.scss'
// 导入路由router
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
