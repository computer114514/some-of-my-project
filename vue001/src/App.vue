<!-- 这里是vue的核心，App组件，没有这个核心vue无法运行 
  
app.vue的运行流程：
1，应用启动，挂载#app
2，页面显示：app.vue到路由承载点，路由承载点再到对应的组件
3，路由切换：点击链接->url改变->router-view显示新页面->新页面到路由承载点->新页面组件

app.vue的用处在于：承载路由（所有页面在这里显示，根据url路径自动切换显示内容）、
全局样式基础（设置height等）、
组件结构（）

-->

<script setup>
//setup默认导出，这也是为什么你可以直接import app而这里却没有导出的原因咯~
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-view />
  <!-- 名为：路由承载点
   vue-router的心脏：所有页面都通过这里显示
   -->
   <!-- 通过这里，你的所有页面才能显示 ，路由承载点，就是屏幕-->
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
/* scoped表示当前样式只作用于当前组件 但这里并没有生效 因为App.vue是根组件*/
#app{
  height:100%;
}
/* 这就是对body操作了，设置高度为100% */
*{
  margin: 0;
  padding: 0;
}
</style>
<!-- 这是我设置的style组件，这些样式影响整个应用 -->
