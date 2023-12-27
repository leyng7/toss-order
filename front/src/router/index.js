import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import ReadView from "@/views/ReadView.vue"
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";

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
    },
    {
      path: "/login",
      component: LoginView
    },
    {
      path: "/signup",
      component: SignupView
    }
  ]
})

export default router
