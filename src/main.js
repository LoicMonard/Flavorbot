import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login.vue'
import Router, { VueRouter } from 'vue-router'
import VueFire from 'vuefire'

Vue.use(Router)
Vue.use(VueFire)

const router = new Router({
  routes: [
    { path: '', component: Login }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
