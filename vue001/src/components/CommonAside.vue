<!-- 好乐，这应该就是则边栏组件了，应该没什么好说的 -->

<!-- 看看结构罢
 1，el-aside
 2，左侧栏标题组件和el-menu组件
 3，el-menu组件包含el-menu-item和el-sub-item
 4,el-menu-item包含循环的图标和label标签
 5，el-sub-item包含group主群和主题template也是循环引入图标和label标签
-->

<template>
  <el-aside width="$store.state.isCollapse?'64px':'180px'">
    
    <h3 v-show="$store.state.isCollapse">后台管理</h3>
    <h3 v-show="!$store.state.isCollapse">后台</h3>
 
    <el-menu class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :collapse="!$store.state.isCollapse"
      :collapse-transition="false"
      >

        <el-menu-item :index="item.path" 
        v-for="item in noChildren()" 
        :key="item.path"
        @click="clickMenu(item)"
        >
          <component class="icons" :is="item.icon"></component>
          <!-- 实现动态引入 -->
          <span>{{ item.label }}</span>

        </el-menu-item>

        <el-sub-menu :index="item.label"
         v-for="item in hasChildren()"
         :key="item.path"
         >
          <template #title>
            <component class="icons" :is="item.icon"></component>
            <!-- 实现动态引入 -->
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="subItem.path" 
            v-for="(subItem,subIndex) in item.children" 
            :key="subIndex" 
            @click="clickMenu(subItem)"
            >
            <component class="icons" :is="subItem.icon"></component>
            <!-- 实现动态引入 -->
            <span>{{ subItem.label }}</span>
            </el-menu-item>
            
          </el-menu-item-group>
        </el-sub-menu>
    </el-menu>

  </el-aside>
</template>

<script>
import { mapState } from 'vuex/dist/vuex.cjs.js';
import {useRouter} from 'vue-router'
export default {
//setup是vue3引入的入口函数
//cinposition api只能在setup中使用
  setup(){

    const list=[
        {
          path: '/',
          name: 'home',
          label: '首页',
          // icon: 's-home',
          icon: 'House',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          path:'/other',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
          //这就是有子菜单的项目啦
        }
      ];
    const router=useRouter()

    //nochildren筛选没有子菜单的项目
    const noChildren=()=>{
      return list.filter((item)=>!item.children);
    }
    //hasChildren筛选有子菜单的项目
    const hasChildren=()=>{
      return list.filter((item)=>item.children);
    }

    //菜单点击逻辑
    const clickMenu=(item)=>{
      console.log(item)
      router.push({
          name:item.name,
        })
        //push是页面跳转
        //导航到name:item.name对应的路由
        //为什么呢，因为路由配置里面也有name属性啊，这样就可以一一对应了口牙！
        //最后跳转到name:home对应的路径
    }
    return {noChildren,hasChildren,clickMenu};
  }
}
</script>

<style lang="less" scoped>
.el-menu{
  border-right:none;
}
  h3{
    line-height:48px;
    color:#fff;
    text-align:center;
  }
.icons{
  width:18px;
  height:18px;
  
}
</style>
