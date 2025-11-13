import axios from 'axios'
import config from '../config'
//引入配置？  为了获取mockApi
import { ElMessage } from 'element-plus'

//※结束的标志


//创建一个axios实例
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
service.interceptors.response.user((res) => {
  const { code, data, msg } = res.data
  //视情况而定
  if (code === 200) {
    return data
  }
  else {
    //网络error

  }
})
