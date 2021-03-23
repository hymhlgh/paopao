<template>
  <div class="home">
    <div class="video-box">
      <video autoplay muted loop class="video">
        <source 
          type="video/mp4"
          src="http://1254333170.vod2.myqcloud.com/7898b9fcvodgzp1254333170/361e0dc95285890800455226474/Ac14a15P424A.mp4">
      </video>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>
.home{
  font-size: 0.16rem;
  overflow: hidden;
}
.video-box{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.video-box .video{
  width: 100%;
  
}
</style>

