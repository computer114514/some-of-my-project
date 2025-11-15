// <!-- 嗯，这个mainjs文件是vue的‘启动’程式。
// 有了mainjs，vue应用才可以启动-->

import { createApp } from 'vue'
//导入核心依赖
//和app有点混淆啊，app是vue应用实例，这里是导入vue的核心依赖
//createapp是用来创建vue应用实例的
//就像手机的启动程序
import ElementPlus from 'element-plus'
//导入ui组件库
import 'element-plus/dist/index.css'
import App from './App.vue'
//导入根组件
//像手机的主界面一样，vue应用的根组件就是App.vue
//这样，你就可以在template中使用<router-view/>,App作为其他组件的容器,不需要()调用
import router from './router/index.js'
//导入路由配置
import './api/mock.js'
//引入mockjs
import api from './api/api.js'
//导入api接口

const app = createApp(App)
//创建vue应用实例
// 比喻：正式开始建餐厅 有了所有材料，开始施工 应用实例 = "餐厅建筑"

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index.js'


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//嗯，这个部分呢，是将所有的图标‘全局’注册了一下，让所有的组件都可以使用这个图标

//使用插件和服务
app.use(ElementPlus)
//使用ui组件库
app.use(router).use(store)
//使用路由和状态管理
app.config.globalProperties.$api = api
//这个地方是将api接口挂载到全局属性上，让所有组件都可以使用这个接口

app.mount('#app')
//应用挂载到dom，app.mount('#app')
//还记得我们以前提到的，渲染到div吗？div的id就是app，app相当于挂载到了app这个div上
//这找到app这个div，挂载到div上~

//这样就说明准备好了，可以开业了
