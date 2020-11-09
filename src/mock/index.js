const Mock = require('mockjs')

// 配置拦截匹配规则和处理回调
const data = Mock.mock(/\/login\/*?/, 'get', function () {
  return {
    msg: '123'
  }
})
export default data
