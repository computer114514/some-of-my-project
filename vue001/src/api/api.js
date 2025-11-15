// 管理整个项目的api
import request from "./request"

export default {
  //home组件 左侧表格数据获取
  getTableData(params) {
    return request({
      method: 'get',
      data: params,
      mock: true
    })
  }
}