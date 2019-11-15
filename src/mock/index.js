/**
 *   阔地教育科技有限公司版权所有（codyy.com/codyy.cn）
 *   Copyright (c) 2019, Codyy and/or its affiliates. All rights reserved.
 *   @Date: 2019/4/30 13:44
 *   @Author Chasen (caoxin@codyy.com)
 *   @Description  模拟数据
 */

import Mock from 'mockjs'
import module1 from './module1'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function () {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

Mock.setup({
  timeout: '100-200'
})
mockFactory(module1, true)

/**
 * 创建mock模拟数据
 * @param {*} mods 模块集
 * @param {*} isOpen 是否开启?a
 */
function mockFactory (mods, isOpen = true) {
  if (isOpen) {
    mods.forEach(mod => {
      if (mod.mock) {
        // 2种url拦截方式
        const data = { mock: true, ...mod.data } // 区分这是mock数据  防止懵逼
        Mock.mock(mod.url, mod.type, data)
        Mock.mock(RegExp(mod.url + '.*'), mod.type, data)
      }
    })
  }
}

export default Mock
