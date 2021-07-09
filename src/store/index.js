// 1.导入
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 2.安装插件
Vue.use(Vuex)

// 3.创建store对象
const state = {
    CartList: []
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

// 导出store
export default store