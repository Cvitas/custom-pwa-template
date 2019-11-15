/**
 *   @Date: 2019/4/30 15:58
 *   @Author Chasen
 *   @Description  axios请求封装
 */

import axios from 'axios'
import { getToken, removeToken } from './storage'
import * as RESPONSE_STATUS from './config/RESPONSE_CODE'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

const service = axios.create({
  withCredentials: true,
  baseURL: '', // api 的 base_url
  timeout: 15 * 1000 // 请求超时时间
})

/**
 * 请求发送
 */
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers.Authorization = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

/**
 * 请求响应
 */
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status === RESPONSE_STATUS.EXPIRED) {
      removeToken()
      location.reload() // 为了重新实例化vue-router对象 避免bug
      return Promise.reject(new Error('logout'))
    } else if (res.status !== RESPONSE_STATUS.SUCCESS) {
      return Promise.reject(new Error('network error'))
    } else {
      return res.result
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
