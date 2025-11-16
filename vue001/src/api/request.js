// 4. request.js检查开关：
//  - 如果 mock=true → 用假数据
//  - 如果 mock=false → 调用真实API
import axios from 'axios'
import config from '../config'
//引入配置？  为了获取mockApi
import { ElMessage } from 'element-plus'

const NETWORK_ERROR = "网络请求异常"
//常量定义，错误信息归于“网络请求异常”

//创建一个axios实例，axios是一个基于Promise的HTTP库
const service = axios.create({
  baseURL: config.baseApi
})

//service是axios实例！
//在请求之前做一件事情
service.interceptors.request.use((req) => {
  //拦截器.请求前
  //jwt-token认证的时候，可以自定义header？！
  return req
})

//在请求之后做一些事情
service.interceptors.response.use((res) => {
  console.log(res.data)
  const { code, data, msg } = res.data
  //这就是js的解构赋值知识点啊！

  //返回什么视情况而定
  if (code === 200) {
    return data
    //200代表成功，成功就只返回data部分。
  }
  else {
    //啊呀！失败了，code不是200呢
    ElMessage.error(msg || NETWORK_ERROR)
    //显示一个红色的网络error信息罢
    return Promise.reject(msg || NETWORK_ERROR)
    //抛出错误
  }
})

//封装的核心函数
//说明request函数接收的参数结构
function request(options) {
  // {
  //   method: 'get'
  //   data: {

  //   },
  //   mock: false,
  // }
  options.method = options.method || 'get'
  //如果未指定方式，那么默认get
  if (options.method.toLowerCase() == 'get') {
    options.params = options.data
    //如果是get请求，那么options的属性就是options的data?
    //因为要复制一份，这是get的特殊需求
  }
  //对mock的处理
  let isMock = config.mock
  //读取全局mock配置，看看Mock是否开启
  if (typeof options.mock !== undefined) {
    isMock = options.mock
    //从api.js中获取isMock配置。
    //这就是为什么说api.js是一个接口的开关啊！
    //先读取整体，再读取单个api的配置
  }
  //对线上环境做处理
  //强制使用真实api
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
    //开发环境：真实api
  }
  else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
    //前者mock服务地址，后者真实api服务地址。
    //如果isMock为true，那么基准地址就是mockApi
    //如果isMock为false，那么基准地址就是baseApi
  }
  return service(options)
  //最终的axios调用，发起网络请求
}
export default request


