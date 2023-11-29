import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import ReadView from "@/views/ReadView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts/:postId',
      name: 'read',
      component: ReadView,
      props: true
    }
  ]
})

export default router
