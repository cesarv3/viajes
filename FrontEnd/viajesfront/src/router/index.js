import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import ppto from '../views/ppto.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/ppto",
      name: "ppto",
      component: ppto
    }
  ]
})
// const routes = [
//   {
//     path: '/',
//     redirect: {
//       name: login
//     }
//   },
//   {
//     path: '/login',
//     name: "login",
//     component: Login
//   },
//   {
//     path: '/ppto',
//     name: 'ppto',
//     component: ppto
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })


