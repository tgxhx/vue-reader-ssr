import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Common from './assets/js/utils.js'
import './assets/css/reset.css'
Vue.use(Common)
Vue.use(MintUI)
// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp() {
  // 创建 router 实例
  const router = createRouter()
  const store = createStore()
  sync(store, router)
  
  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    router,
    store,
    render: h => h(App)
  })
  return {app, router, store}
}