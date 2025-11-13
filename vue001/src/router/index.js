import { createRouter, createWebHashHistory } from 'vue-router'
//第一个是创建哈希表，第二个是使用路由的方式
const routers = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    //vite打包一定要补全
    children: [
      {
        path: '/home',
        //path表示哪个url路径对应哪个组件
        name: 'home',
        //component表示组件的路径
        component: () => import('../views/home/Home.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/User/User.vue')
      },
      {
        path: '/mall',
        name: 'mall',
        component: () => import('../views/Mall/Mall.vue')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('../views/Page1.vue')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/Page2.vue')
      }
    ]
  }
]
//创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
})
//导出路由
export default router