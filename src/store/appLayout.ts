import { defineStore } from 'pinia'
// main is the name of the store. It is unique across your application
// main是商店的名称。它在应用程序中是独一无二的
// and will appear in devtools 并将出现在devtools中
export const useAppLayoutStore = defineStore('appLayout', {
  // a function that returns a fresh state 返回新状态的函数
  state: () => ({
    isCollapse: true
  }),
  // optional getters 可选的getter
  getters: {
    // // getters receive the state as first parameter
    // // getter接收状态作为第一个参数
    // setIsCollapse: (state) => state.isCollapse
    // // use getters in other getters
    // // 在其他getter中使用getter
  },
  // optional actions 可选的actions
  actions: {
    // reset () {
    //   // `this` is the store instance
    //   // “这”是商店实例
    //   this.isCollapse = !this.isCollapse
    // }
  }
})
