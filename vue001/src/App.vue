<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-view />
  
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
