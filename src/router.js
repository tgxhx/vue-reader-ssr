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
        path: '/',
        component: () => import('./components/Home.vue')
        // path: '/', component: Home
      },
      {
        path: '/bookdetail/:id',
        name: 'bookdetail',
        component: () => import('./components/BookDetail.vue')
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('./components/Category.vue')
      },
      {
        path: '/reader/:id/:chapter?',
        name: 'reader',
        component: () => import('./components/Reader.vue')
      }
    ]
  })
}