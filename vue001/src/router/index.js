import { createRouter, createWebHashHistory } from 'vue-router'
//你看，你下载的vue-router会有export default，这是vue-router的默认导出
//可以通过import引入createRouter等核心功能
//第一个是创建哈希表，第二个是使用路由的方式
const routers = [
  {
    path: '/',
    //网址路径
    component: () => import('../views/Main.vue'),//这边还用到了懒加载优化
    //对应的组件
    //vite打包一定要补全
    children: [
      {
        path: '/home',
        //path表示哪个url路径对应哪个组件
        name: 'home',
        //路由名称（便于程序中引用）
        component: () => import('../views/home/Home.vue')
        //component表示组件的路径，component是一个函数
        //箭头函数import引入相应的组件，这就代表对应的组件
        //返回一个promise对象，promise对象resolve后，返回组件的实例
        //vue-router会自动渲染组件实例到<router-view></router-view>中
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
    //children就是子路由，你可以在main.vue中通过<router-view></router-view>渲染子路由
  }
]
//创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  //这是路由方法:哈气路由
  //
  routes: routers
  //代表使用上面定义的路由规则
})
export default router
//导出路由实例