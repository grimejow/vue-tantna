import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from "./components/router.js"
Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(iView);

router.push('login');
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')