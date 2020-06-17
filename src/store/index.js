import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
	serVersion:null,
	cancelTokenArr: [] // 取消请求token数组
  
}
const getters={
  
}
const actions={}
const mutations={
	pushToken (state, payload) {
		state.cancelTokenArr.push(payload.cancelToken)
	  },
	  clearToken ({ cancelTokenArr }) {
		cancelTokenArr.forEach(item => {
		  item('路由跳转取消请求')
		})
		cancelTokenArr = []
	  }
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
