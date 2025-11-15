import axios from 'axios'
import config from '../config'
//引入配置？  为了获取mockApi
import { ElMessage } from 'element-plus'

const NETWORK_ERROR = "网络请求异常"
//创建一个axios实例，axios是一个基于Promise的HTTP库
const service = axios.create({
  baseURL: config.baseApi
})

//在请求之前做一件事情
service.interceptors.request.use((req) => {
  //可以自定义header？！
  //jwt-token认证的时候
  return req
})

//在请求之后做一些事情
service.interceptors.response.use((res) => {
  console.log(res.data)
  const { code, data, msg } = res.data
  //视情况而定
  if (code === 200) {
    return data
  }
  else {
    //网络error
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

//封装的核心函数
function request(options) {
  // {
  //   method: 'get'
  //   data: {

  //   },
  //   mock: false,
  // }
  options.method = options.method || 'get'

  if (options.method.toLowerCase() == 'get') {
    options.params = options.data
  }
  //对mock的处理
  let isMock = config.mock
  if (typeof options.mock !== undefined) {
    isMock = options.mock
  }
  //对线上环境做处理
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  }
  else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
  }
  return service(options)
}
export default request


