<template>
  <div class="home">
    <div class="video-box">
      <video autoplay muted loop class="video">
        <source 
          type="video/mp4"
          src="http://1254333170.vod2.myqcloud.com/7898b9fcvodgzp1254333170/361e0dc95285890800455226474/Ac14a15P424A.mp4">
      </video>
      <div class="title">极速体育 尽在跑跑</div>
      <div class="click-btn">CLICK HERE</div>
      <div class="tiao"></div>
    </div>
    <div class="video-box">
      <video autoplay muted loop class="video">
        <source 
          type="video/mp4"
          src="http://1254333170.vod2.myqcloud.com/7898b9fcvodgzp1254333170/361e0dc95285890800455226474/Ac14a15P424A.mp4">
      </video>
      <div class="title">极速体育 尽在跑跑</div>
      <div class="click-btn">CLICK HERE</div>
      <div class="tiao"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppLogo from '~/components/AppLogo.vue';

export default {
  components: {
    AppLogo
  },
  mounted() {
    axios.post('http://121.196.53.78:8001/api/navbar/list')
  }
}
</script>

<style scoped>
.home{
  font-size: 0.16rem;
  /* overflow: hidden; */
  width: 100%;
  height: 100%;
}
.video-box{
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  color: #fff;
}
.video-box .video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-box .title{
  position: absolute;
  bottom: 100px;
  font-size: 20px;
  width: 100%;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 500;
}
.video-box .click-btn{
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
  text-align: center;
}
.video-box .tiao{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 25px;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
}
@keyframes tiaoAn {
  from {top: -100%;}
  to {top: 100%;}
}
.video-box .tiao::after{
  position: absolute;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  top: 0;
  animation: tiaoAn 1s linear infinite;
}
</style>

