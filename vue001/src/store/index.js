//store组件用于储存数据，数据成为公用数据，其他组件可以直接访问，这里就存了个state：iscollapse属性
import { createStore } from 'vuex'
export default createStore({
  state: {
    isCollapse: true
  },
  //mutation代表突变，这里是一个变换的方法，如果要变，那么，就调用这个方法，方法中改变state中的属性
  //具体语法: store.commit(updateIsCollapse)
  mutations: {
    updateIsCollapse(state, payload) {
      state.isCollapse = !state.isCollapse
    }
  }
})