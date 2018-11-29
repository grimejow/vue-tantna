import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import login from "./login.vue";
import phone from "./phone.vue";
import wechat from "./wechat.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
        path: "/login",
        component: login,

    },
    {
        path: "/phone",
        component: phone
    },
    {
        path: "/wechat",
        component: wechat
    },
    // {
    //     path: '/',
    //     redirect: '/login'
    // }
]

var router = new VueRouter({
    routes
})
export default router;