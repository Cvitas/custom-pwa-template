/**
 *   @Date: 2019/4/1 11:52
 *   @Author Chasen
 *   @Description  SPA入口
 */
import Vue from 'vue'
import store from './store'
import router from './router'
import App from './views/App.vue'
import { error } from './utils/error'
import './styles/normalize.css' // css reset

Vue.config.errorHandler = error

// 在开发环境中开启，在生产环境中关闭
if (process.env.NODE_ENV === 'development') {
  Vue.config.devtools = true
  require('./mock')
} else {
  Vue.config.devtools = false
}

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})