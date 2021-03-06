import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import manage from '@/pages/manage'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage
    }
  ]
})
