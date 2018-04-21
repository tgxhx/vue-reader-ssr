// router.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/', component: () => import('./components/Home.vue')
        // path: '/', component: Home
      },
      {
        path: '/bookdetail/:id',
        name: 'bookdetail',
        component: () => import('./components/BookDetail.vue')
      },
      /*{
        path: '/about', component: () => import('./components/About.vue')
        // path: '/about', component: About
      }*/
    ]
  })
}