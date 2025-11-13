import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js'
import './api/mock.js'
//引入mockjs



const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index.js'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(router).use(store)
app.mount('#app')
