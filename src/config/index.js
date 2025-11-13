// 配置环境文件
//一般只在企业级项目里面有三个环境：1，开发2，测试3，线上。
const env = import.meta.env.MODE || 'prod'
//当前环境默认为线上环境
const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi: 'https://m1.apifoxmock.com/m1/7394853-7127373-default/home/getTableData'
  },
  test: {
    baseApi: '//test.future.com/api',
    mockApi: 'https://m1.apifoxmock.com/m1/7394853-7127373-default/home/getTableData'
  },
  pro: {
    baseApi: '//future.com/api',
    mockApi: 'https://m1.apifoxmock.com/m1/7394853-7127373-default/home/getTableData'
  }
}
export default {
  env,
  //mock总开关
  mock: true,
  ...EnvConfig[env]
}
