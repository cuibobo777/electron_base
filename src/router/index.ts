// router
import {createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/HelloWorld.vue')
    }
]

const options: RouterOptions = {
    history: createWebHashHistory(),
    routes
}

const router: Router = createRouter(options)

export default router