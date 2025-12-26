import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'Home',
    },
    {
      path: '/about',
      component: AboutView,
      name: 'About',
    },
    {
      path: '/projects',
      component: ProjectsView,
      name: 'Projects',
    },
  ],
})

export default router
