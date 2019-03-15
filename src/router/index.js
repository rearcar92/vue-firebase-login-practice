import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import store from '../store/index.js'
// import Hello from '@/components/Hello'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
      beforeEnter: (to, from, next) => {
        if (store.state.userUid !== '') {
          next()
        } else {
          alert('로그인 하세요')
          next('/')
        }
      }
    }

  ]
})
