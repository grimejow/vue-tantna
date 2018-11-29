<template>
  <div>
    <div class="aa">  ssddsdsd</div>
     <!-- <div class="loop-play"> 
        <Carousel v-model="value1" autoplay  loop>
        <CarouselItem>
            <div class="demo-carousel">
              <p ><span class="left-slide" >??</span> <span class="like">??</span> </p>
              <p ><span class="right-slide">??</span> <span class="like">??</span> </p>
              <img src="./assets/img/iu1.jpg" width=70%  alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <p>???????????</p>
              <p>?????? <span class="left-slide">??</span> </p>
              <img src="./assets/img/iu2.jpg"  width=70%  alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <p>???????????</p>
              <p>?????? <span class="left-slide">??</span>??</p>
              <img src="./assets/img/iu3.jpg"  width=70% alt="">
            </div>
        </CarouselItem>
      
    </Carousel> 
     
    </div>  -->
      <!-- <router-link to="/login"></router-link> -->
       <!-- <router-link  to="/wechat">
        <div class="wechat">
          <Button type="primary" :size="buttonSize" style="width:80%;height:80%"><Icon type="ios-text" :size='24'/>????</Button>
        </div>
      </router-link>
      <router-link to="/phone">
      <div class="phone">
        <Button :size="buttonSize" style="width:80%;height:80%"><Icon type="ios-phone-portrait" :size='24'/>????</Button>
      </div>
      </router-link>  -->
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import login from './components/login.vue'

export default {
  data() {
            return {
                // buttonSize: 'large',
                // value1:0
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
#app1 {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.loop-play{
  width:100%;
  height:60%;
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
