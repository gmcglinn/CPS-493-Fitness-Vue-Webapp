import {createWebHistory, createRouter} from 'vue-router'
import Home from '../view/Home.vue'
import Register from '../view/Register.vue'
import Login from '../view/Login.vue'
import store from '../store'
import Settings from '../view/Settings.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter: (to, from, next) => {
            if(store.state.isLogged) next({ name: 'Home' })
            next()
        }
        
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter:(to, from, next) => {
            if(store.state.isLogged) next({name: 'Home'})
            next()
        }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
