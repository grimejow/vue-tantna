import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import login from "./login.vue";
import phone from "./phone.vue";
import wechat from "./wechat.vue";
import chat from "./chat.vue";
import searchFriend from "./searchFriend";
import myfriend from "./myfriend";
import nearFriend from "./nearFriend";
import myself from "./myself";


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
    {
        path: "/chat",
        component: chat,
        children:[
            {
                path: "/chat/searchFriend",
                component: searchFriend 
            },
            {
                path: "/chat/myfriend",
                component: myfriend
            },
            {
                path: "/chat/nearFriend",
                component: nearFriend
            },
            {
                path: "/chat/myself",
                component: myself
            },

        ]
    },
    // {
    //     path: "/chat/searchFriend",
    //     component: searchFriend
    // },
    // {
    //     path: "/chat/myfriend",
    //     component: myfriend
    // },
    // {
    //     path: "/chat/nearFriend",
    //     component: nearFriend
    // },
    // {
    //     path: "/chat/myself",
    //     component: myself
    // },
    {
        path: '/',
        redirect: '/login'
    }
]

var router = new VueRouter({
    routes
})
export default router;