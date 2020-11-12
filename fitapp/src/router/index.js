import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/:catchAll(.*)',
      name: 'ErrorPage',
      component: () => import('../views/ErrorPage.vue')
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;