import {createWebHistory, createRouter} from 'vue-router'
import Home from '../view/Home.vue'
import Register from '../view/Register.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
