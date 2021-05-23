import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue"
const ChartDemo = ()=>import("../components/ChartDemo.vue");
const routes:Array<RouteRecordRaw> = [
        {
                path:"/",
                component:Home
        },
        {
                path:"/chartdemo",
                component:ChartDemo
        }
];

const router =  createRouter({
        history:createWebHistory(),
        routes
})
export default router;