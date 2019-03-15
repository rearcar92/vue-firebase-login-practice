/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show: true,
    userUid: ''
  },
  // eslint-disable-next-line no-undef
  
  mutations: {
    setShow (state, show) {
      state.show = show
    },
    // outShow (state, show) {
    //   state.show = show = true
    // },
    setUser (state, userUid) {
      state.userUid = userUid
    }
    // setOut (state, userUid) {
    //   state.userUid = userUid = ''
    // }
  }   
})
