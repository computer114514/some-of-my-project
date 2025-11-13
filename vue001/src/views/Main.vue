<!-- //主组件里边看路由出口 -->
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
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '../components/CommonAside.vue'

export default defineComponent({
  components:{CommonHeader,CommonAside},
})

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