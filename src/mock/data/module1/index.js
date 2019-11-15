/**
 *   @Date: 2019/11/14 9:07
 *   @Author Chasen
 *   @Description
 */

import Mock from 'mockjs'

/**
 * 登录成功返回数据
 */
export const loginRes = Mock.mock(
  {
    result: {
      userId: '@id',
      token: '@id',
      role: 1,
      username: '@cname',
    },
    status: '000000000'
  })