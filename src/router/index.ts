import {createRouter, createWebHashHistory, RouteRecordRaw,} from "vue-router";
import Home from "@/views/home.vue";
import Vuex from "@/views/vuex.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/vuex",
        name: "Vuex",
        component: Vuex,
    },
    {
        path: "/axios",
        name: "Axios",
        component: () => import("@/views/Axios.vue"), // lazy-load
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;