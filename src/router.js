import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Events from './views/Events.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/events/:id',
      name: 'events',
      component: () => import(/* webpackChunkName: "Event-List" */ './views/Events.vue')
    }
  ]
})
