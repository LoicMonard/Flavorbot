import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Router, { VueRouter } from 'vue-router'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Router)
Vue.use(VueFire)
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken2,
    secondary: colors.orange.accent2,
    accent: colors.red.darken3
  }
})

const router = new Router({
  routes: [
    { path: '', component: Login },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
