import {createWebHistory, createRouter} from 'vue-router'
import Home from '../view/Home.vue'
import Register from '../view/Register.vue'
import Login from '../view/Login.vue'
import store from '../store'
import Settings from '../view/Settings.vue'
import Post from '../view/Post.vue'
import Search from '../view/Search.vue'
import MyFeed from '../view/MyFeed.vue'
import LikedPosts from '../view/LikedPosts.vue'
import AdminExercise from '../view/AdminExercise.vue'
import AdminUsers from '../view/AdminUsers.vue'
import CreateWorkout from '../view/CreateWorkout.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
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
        path: '/myFeed',
        name: 'MyFeed',
        component: MyFeed,
        beforeEnter: (to, from, next) => {
            if(!store.state.isLogged) next({ name: 'Home' })
            next()
        }
        
    },
    {
        path: '/likedPosts',
        name: 'LikedPosts',
        component: LikedPosts,
        beforeEnter: (to, from, next) => {
            if(!store.state.isLogged) next({ name: 'Home' })
            next()
        }
        
    },
    {
        path: '/CreateWorkout',
        name: 'CreateWorkout',
        component: CreateWorkout,
        beforeEnter: (to, from, next) => {
            if(!store.state.isLogged) next({ name: 'Home' })
            next()
        }
        
    },
    {
        path: '/AdminExercise',
        name: 'AdminExercise',
        component: AdminExercise,
        beforeEnter: (to, from, next) => {
            if(store.state.isAdmin) next({ name: 'Home' })
            next()
        }
        
    },
    {
        path: '/AdminUsers',
        name: 'AdminUsers',
        component: AdminUsers,
        beforeEnter: (to, from, next) => {
            if(store.state.isAdmin) next({ name: 'Home' })
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
    },
    {
        path: '/post/:PostID',
        name: 'Post',
        component: Post
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
