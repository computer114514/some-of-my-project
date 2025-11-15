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


<!--      ！！
        ！！！！
       ！！！！！
     ！！！！！！！
    ！！！！！！！！ 
    你昨天看到了template，接下来该看script了！
    -->


<script>
import { mapState } from 'vuex/dist/vuex.cjs.js';
import {useRouter} from 'vue-router'
export default {

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
        }
      ];
    const router=useRouter()
    const noChildren=()=>{
      return list.filter((item)=>!item.children);
    }
    const hasChildren=()=>{
      return list.filter((item)=>item.children);
    }
    const clickMenu=(item)=>{
      console.log(item)
      router.push(
        {
          name:item.name,
        }
      )
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
