<template>
  <div id="app">
    <!-- <div class="loop-play"> -->
       <!-- <Carousel v-model="value1" autoplay  loop>
        <CarouselItem>
            <div class="demo-carousel">
              <p ><span class="left-slide" >右滑</span> <span class="like">喜欢</span> </p>
              <p ><span class="right-slide">左滑</span> <span class="like">无感</span> </p>
              <img src="./assets/img/iu1.jpg" width=70%  alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <p>当你喜欢一个也喜欢你的</p>
              <p>人，就会得到 <span class="left-slide">配对</span> </p>
              <img src="./assets/img/iu2.jpg"  width=70%  alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <p>当你和对方配对时，就可</p>
              <p>以愉快的开始 <span class="left-slide">聊天</span>了！</p>
              <img src="./assets/img/iu3.jpg"  width=70% alt="">
            </div>
        </CarouselItem>
      
    </Carousel> -->
    <!-- 555
    </div> -->
      <!-- <router-link to="/login">11</router-link>
      <router-link  to="/wechat">
        <div class="wechat">
          <Button type="primary" :size="buttonSize" style="width:80%;height:80%"><Icon type="ios-text" :size='24'/>微信登录</Button>
        </div>
      </router-link>
      <router-link to="/phone">
      <div class="phone">
        <Button :size="buttonSize" style="width:80%;height:80%"><Icon type="ios-phone-portrait" :size='24'/>手机登录</Button>
      </div>
      </router-link> -->
      <router-view></router-view>
  </div>
</template>

<script>
// import login from './components/login.vue'

export default {
  name: 'app',
  components: {
    // login
  },
  data () {
            return {
                buttonSize: 'large',
                value1:0
            }
        },
}
</script>

<style>
html,body{
  width:100%;
  height:100%;
  overflow: hidden;
}
#app {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 30px; */
}
.loop-play{
  width:100%;
  height:60%;
  margin-top:10%;
}
.loop-play .ivu-carousel{
  height:100%;
}
.loop-play .ivu-carousel-dots{
  bottom:-20%;
}
.loop-play .ivu-carousel-arrow{
  display:none;
}
.wechat{
  width:100%;
  height:60px;
  margin-top:22%;
}
.phone{
  width:100%;
  height:60px;
}
.demo-carousel{
  font-size: 1.2rem;
  color:grey;
}
.left-slide{
  color:red;
}

</style>
