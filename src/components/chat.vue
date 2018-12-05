<template>
    <div>
        <!-- <h1>聊天页面</h1> -->
        <p>{{msg}}</p>
        <router-link to="/chat/searchFriend" >
        <div class="login">
         <Button type="primary" size="large" long>寻找好友</Button>
         </div>
         </router-link>
         <router-link to="/chat/myfriend" >
        <div class="login">
         <Button type="primary" size="large" long>我的朋友</Button>
         </div>
         </router-link>
         <router-link to="/chat/nearFriend" >
        <div class="login">
         <Button type="primary" size="large" long>附近的人</Button>
         </div>
         </router-link>
         <router-link to="/chat/myself">
        <div class="login">
         <Button type="primary" size="large" long>我</Button>
         </div>
         </router-link>
         <router-view></router-view>
    </div>
</template>
<script>
    import searchFriend from "./searchFriend";
import myfriend from "./myfriend";
import nearFriend from "./nearFriend";
import myself from "./myself";
    export default {
         components: {
             searchFriend,
             myfriend,
             nearFriend,
             myself,
         },
        data () {
            return {
                msg: '聊天页面'
            }
        }
    }
</script>