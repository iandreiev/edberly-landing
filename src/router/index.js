import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Home')
  },
  {
    path: '/course',
    name: 'Course',
    component: ()=>import('../views/Course')
  },
  {
    path: '/register',
    name: 'Register',
    component: ()=>import('../views/Register')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
