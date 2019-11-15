/**
 *   @Date: 2019/9/12 13:35
 *   @Author Chasen
 *   @Description 静态路由
 */

import Layout from '@/views/framework'

const Login = () => import(/* webpackChunkName: "Login" */'@/views/Login')
const Home = () => import(/* webpackChunkName: "Home" */'@/views/Home')

export default [
  {
    path: '',
    component: Layout,
    children: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        keepAlive: true
      },
    }, {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录',
        keepAlive: true
      },
    }]
  },
  { path: '*', redirect: '/' }
]
