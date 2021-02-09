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
    component: () => import( '../views/Login.vue')
  },
 {
  path: '/stream',
  name: 'Streampage',
  component: () => import('../views/Streampage.vue'),
  meta: { requiresAuth: true },
},
{
  path: '/addstream',
  name: 'addstream',
  component: () => import('../components/AddStream.vue')
},
{
  path: '/setting',
  name: 'setting',
  component: () => import('../components/Setting.vue')
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = sessionStorage.getItem("user");
  if (to.matched.some((route) => route.meta.requiresAuth && !loggedIn)) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router
