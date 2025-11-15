
<template>
  <el-header>
    <div class="l-content">
    <el-button size="small" plain @click="handleCollapse()">
<el-icon :size="20">
  <Menu />
</el-icon>
    </el-button>
    <h3>首页</h3>
    </div>
    <div class="r-content">
 <el-dropdown>
    <span class="el-dropdown-link">
      <img src="../assets/logo.jpg" alt="" style="width: 40px; height: 40px; border-radius: 50%;">
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    </div>
  </el-header>

</template>

<style scoped>
header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  background-color: #333;
}
.r-content{
  .user{
      width:40px;
      height:40px;
      border-radius: 50%;
  }
}

.l-content{
  display:flex;
  align-items:center;
  .el-button{
    margin-right:20px;
  }
  h3{
    color:#fff;
    
  }
}
</style>

<script>
import { User } from '@element-plus/icons-vue';
import {useStore} from 'vuex'

export default {
  setup(){
    let store=useStore()
    const getImgSrc=(user)=>{
      console.log(import.meta.url)
      return new URL(`../assets/${user}.jpg`,import.meta.url).href;
    };
        let handleCollapse=()=>{
      //jo是要调用vuex中的mutations
      store.commit("updateIsCollapse");
    }
    return{
      // imgSrc
      getImgSrc,handleCollapse
    };

  },
};
</script>


