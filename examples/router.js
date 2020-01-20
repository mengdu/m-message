import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: () => import('./views/home') },
    { path: '/live-demo', component: () => import('./views/live-demo') },
    { path: '/docs', component: () => import('./views/docs') }
  ]
})

export default router
