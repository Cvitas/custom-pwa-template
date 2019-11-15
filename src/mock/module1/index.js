/**
 *   @Date: 2019/11/14 9:05
 *   @Author Chasen
 *   @Description
 */

import URLS from '@/api/urls'
import { loginRes } from '../data/module1'

export default [{
  url: URLS.login,
  type: 'post',
  data: loginRes,
  mock: true
}]