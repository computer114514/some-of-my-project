//vite个性化配置
//安装新插件流程：
//1,安装插件，通过npm install @vitejs/plugin-vue-jsx -D之类的，就像下面那样
//2,导入插件，比如下面import vue from '@vitejs/plugin-vue'，从安装的地方导入
//3,添加到plugins数组，如下面  plugins: [vue(),vueJSX()......]
import { defineConfig } from 'vite'
//import知识，vite中一定有一个export default。import就是导入那个默认导出
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  //plugins代表插件，这里插入一个vue插件
  //这很重要！没有vue插件，vue不会运行
  //vue插件的作用是将vue文件转换为js文件
})
//你看啊相对应的，一个文件一个默认导出，其他文件正好引用这个导出。

