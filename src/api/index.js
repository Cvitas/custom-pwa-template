/**
 *   @Date: 2019/10/9 14:37
 *   @Author Chasen
 *   @Description
 */
import request from '@/utils/request'
import URLS from './urls'

/**
 * 登录
 * @param loginInfo = {loginName,password,validateCode}
 */
export function Login (loginInfo) {
  return request({
    url: URLS.login,
    method: 'post',
    data: loginInfo
  })
}
