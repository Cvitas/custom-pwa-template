module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  rules: {  // 如有自定义需要强制覆盖的规则，请在以下填写（参考ESLint官网）
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 0, // 忽略对象末尾逗号校验
    'eol-last': 0, // 文件以单一的换行符结束
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
