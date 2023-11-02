import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CollatzComponent from './components/CollatzComponent.vue'
import TablaMultiplicar from './components/TablaMultiplicarComponent.vue'

const myRouters = [
    {
        path: "/", component:HomeComponent
    },
    {
        path: "/collatz", component:CollatzComponent
    },
    {
        path: "/tablamultiplicar", component:TablaMultiplicar
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRouters
})

export default router