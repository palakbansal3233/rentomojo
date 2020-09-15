import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/Home/')
  },
  {
    path: 'posts/:id',
    name: 'posts',
    component: () => import('@/views/Posts/'),
    props: true
  },
  {
    path: 'post-details/:userId',
    name: 'postDetails',
    component: () => import('@/views/PostDetails/'),
    props: true
  }
]   
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
