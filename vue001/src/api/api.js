// 列好所有api
// 管理整个项目的api
import request from "./request"

export default {
  //home组件 左侧表格数据获取
  //这里的mock:true和config/index.js中的mock:true是对应的
  //这里的mock:true表示单个api调用时开启mock

  // - config/index.js = 总闸刀，控制整个小区用电
  // - api.js = 各个房间的开关，可以单独控制每个房间
  // - request.js = 小区的网络，负责数据的传输

  getTableData(params) {
    return request({
      method: 'get',
      data: params,
      mock: true
    })
    //终于看懂了，这是在向request函数里传递参数啊！传递这个对象！
  },
  getCountData() {
    return request({
      url: '/home/getCountData',
      method: 'get',
      mock: true
    })
  }

}