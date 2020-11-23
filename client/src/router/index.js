import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import( '../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../components/Login.vue')
  },
 {
  path: '/stream',
  name: 'Streampage',
  component: () => import('../views/Streampage.vue')
},
{
  path: '/addstream',
  name: 'addstream',
  component: () => import('../components/Addstream.vue')
},
{
  path: '/setting',
  name: 'setting',
  component: () => import('../views/Setting.vue')
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
