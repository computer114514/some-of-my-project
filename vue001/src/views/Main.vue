<!-- //主组件里边看路由出口 
 main.vue里面就是房子的框架，哪个地方放哪里-->


 <!-- main.vue结构：
      1，common-layout盒子最外面
      2，el-container盒子
      3，分为common-aside的左侧边框和el-container盒子的右侧
      4，el-container又分为commonheader盒子和el-main盒子
      5，el-main盒子里面存放着router-view——这是子路由的存放地，说明子页面存放在el-main里面
 -->
<template>
  <div class="common-layout">
    <el-container>
      <common-aside/>
      <el-container class="r-container">
        <common-header/>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>  

<script>
import {defineComponent}from 'vue'
//defineComponent是vue3的“组件包装器”，用来正式‘注册’一个vue组件
import CommonHeader from '../components/CommonHeader.vue'
//导入顶部组件
import CommonAside from '../components/CommonAside.vue'
//导入左侧组件
export default defineComponent({
  // 用defineComponent包装组件
  //让组件更加的“正规”....巴拉巴拉一堆原因
  components:{CommonHeader,
    CommonAside,
  },
})
//导出是为了可以全局使用这几个组件
</script>

<style lang="less" scoped>
.el-container{
  flex-wrap:wrap;
  //main向上对齐
  align-items:flex-start;
}

.common-layout{
    height:100%;
    & > .el-container{
      height:100%;
      &> .el-aside{
        height:100%;
        background: #545c64;
      }
    }
  }
</style>