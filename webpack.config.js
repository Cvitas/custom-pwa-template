/**
 *   阔地教育科技有限公司版权所有（codyy.com/codyy.cn）
 *   Copyright (c) 2019, Codyy and/or its affiliates. All rights reserved.
 *   @Date: 2019/4/1 11:43
 *   @Author Chasen (caoxin@codyy.com)
 *   @Description webpack配置项入口
 */

const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig, '')
const config = require(`./build/webpack.${env}.js`)(env)

module.exports = config
