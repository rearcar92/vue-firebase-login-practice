import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import store from './store/index.js'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyAhlytn0LRBRV6XeVGfzxisj7Ga5ALXDfI',
  authDomain: 'fbtest-3b23c.firebaseapp.com',
  databaseURL: 'https://fbtest-3b23c.firebaseio.com',
  projectId: 'fbtest-3b23c',
  storageBucket: 'fbtest-3b23c.appspot.com',
  messagingSenderId: '128510363416'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
