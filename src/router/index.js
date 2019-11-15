/**
 *   @Date: 2019/11/14 9:17
 *   @Author Chasen
 *   @Description
 */

import Vue from 'vue'
import Router from 'vue-router'
import constantRouter from './constantRouter'

// vue-router 重复路由有点击报错BUG修复
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouter
})

/**
 * 路由切换 刷新当前页的基础信息
 * @param to
 */
const refreshPageInfo = (to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'APP'
  }
}

/**
 * 路由守卫 验证
 */
router.beforeEach((to, from, next) => {
  refreshPageInfo(to)
  next()
})

export default router