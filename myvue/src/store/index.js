import Vue from "vue"
import Vuex from "Vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  //存放静态变量
  state:{
    localid:''
  },
  //输入静态变量的方法
  mutations:{
    saveLocalid(state,localid){
      this.state.localid=localid;
    }
  }

})
