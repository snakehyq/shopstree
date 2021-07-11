import Vue from 'vue'
import App from './App.vue'

// 导入base.scss
import 'assets/css/base.scss'
// 导入路由router
import router from './router'
// 导入store
import store from './store'
Vue.config.productionTip = false
// 导入Toast
import Toast from 'components/common/toast'
//导入fastclick
import FastClick from 'fastclick'
// 导入图片懒加载
import VueLazyLoad from 'vue-lazyload'
// 安装插件
Vue.use(Toast)
//解决300ms延迟
FastClick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyLoad,  {
  loading: require('./assets/img/common/placeholder.png')
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
