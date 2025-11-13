<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top:20px">
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/logo.jpg" alt="error"/>
          <div class="user-info">
            <p class="name">Admin</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
            <p>登录时间:<span>2023-11-06</span></p>
            <p>登录地点:<span>南京</span></p>
        </div>
      </el-card>
      
      <el-card shadow="hover" style="margin-top:20px"  height="450px">
        <el-table :data="tableData">
          <el-table-column
          v-for="(val,key) in tableLabel" 
          :key="key" 
          :prop="key" 
          :label="val">
        </el-table-column>
        <!-- v-for里边不是有个key吗，这是给每个循环的东西加上一个一个一个key啊啊啊啊，作为表示符号 -->
        </el-table>
      </el-card>
    </el-col>


    <el-col :span="16" style="margin-top:20px"></el-col>
  </el-row>
</template>  

<script>
import {defineComponent,onMounted,ref} from 'vue'
import axios from "axios"
export default defineComponent({
 setup(){
  let tableData=ref([])
  const tableLabel={
    name:'品牌',
    todayBuy:'今日购买',
    monthBuy:'本月购买',
    totalBuy:'总购买'
  }
  const getTableList=async()=>{
     await axios.get("https://m1.apifoxmock.com/m1/7394853-7127373-default/home/getTableData").then((res)=>{
      console.log(res)
      if(res.data.code==200){
        tableData.value=res.data.data.tableData;
      }
      // tableData.value=res.data.data;
     })
  }
  onMounted(()=>{
    getTableList()
  })
  return {
  tableData,tableLabel
}
 } 
})
</script>

<style lang="less" scoped>
.home{
  .user{
    display:flex;
    //flex之后主轴是x轴，交叉轴是y轴
    align-items:center;
    //牢牢记住，align是交叉轴
    padding-bottom:20px;
    border-bottom:1px solid #ccc;
    margin-bottom:20px;
    img{
      width:150px;
      height:150px;
      border-radius:50%;
      margin-right:40px;
    };
  }
  .login-info{
    p{
      line-height:30px;
      font-size:14px;
      color:#999;
      span{
        color:#666;
        margin-left:60px;
      }
    }
  }

}
</style>