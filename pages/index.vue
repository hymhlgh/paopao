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
    <!--跑跑体育 轮播-->
    <div class="pao-swiper">
      <div class="pao-con">
        <h2 class="title">跑跑体育</h2>
        <p class="dec">
          厦门跑跑体育产业于2021年成立,通过8年的沉淀,
          公司以卡丁车运动切入体育产业,
          致力于打造整合卡丁车全产业链、
          新兴运动品牌孵化平台、运动品牌连锁拓展管理、
          体育产业综合体开发等.
        </p>
        <div class="pao-btn">CLICK HERE
          <img src="~/assets/img/jthei.png" />
        </div>
      </div>
      <div class="img-box">
        <img src="~/assets/img/cat.png" />
      </div>
    </div>
    <!--跑跑米卡-->
    <div class="mi-ka">
      <h2 class="title">PPMK跑跑迷卡</h2>
      <div class="img-box">
        <img src="https://pmo47b088-pic37.websiteonline.cn/upload/222_1j3r.jpg" />
      </div>
      <div class="content">
        <p>
          上海顺舟电子科技有限公司（又称“上海顺舟网络科技有限公司”）
          是一家从事无线通信技术产品的研发、生产与销售的科技型企业，
          公司始终以追求卓越、锲而不舍的精神致力于ZigBee、GPRS/GSM、Wi-Fi、
          1G以下频段（433M/470M）的研发和应用，以专业的技术和良好的
        </p>
        <div class="con-btn">CLICK HERE
          <img src="~/assets/img/jiantou.png" />
        </div>
      </div>
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
/* 跑跑 轮播 */
.pao-swiper{
  width: 1080px;
  margin: 20px auto;
  display: flex;
}
.pao-swiper .img-box{
  width: 540px;
  height: 600px;
}
.pao-swiper .img-box>img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pao-swiper .pao-con{
  width: 540px;
  height: 600px;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.pao-swiper .pao-con .title{
  font-size: 36px;
  line-height: 50px;
  letter-spacing: 2px;
  font-weight: 600;
  margin: 0;
}
.pao-swiper .pao-con .dec{
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 1px;
}
.pao-swiper .pao-con .pao-btn{
  font-size: 14px;
  color: #505050;
  line-height: 20px;
}
.pao-swiper .pao-con .pao-btn>img{
  position: relative;
  top: 5px;
  left: 10px;
}

/* 跑跑米卡*/
.mi-ka{
  width: 1200px;
  margin: 20px auto;
  display: flex;
  position: relative;
  padding-top: 70px;
}
.mi-ka .title{
  position: absolute;
  top: 0px;
  left: 840px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 3px;
  margin: 0;
}
.mi-ka .title::after{
  content: '';
  position: absolute;
  left: 0;
  bottom: -20px;
  width: 70px;
  height: 5px;
  background-color: #E02020;
}
.mi-ka .title::before{
  content: '';
  position: absolute;
  left: 75px;
  bottom: -20px;
  width: 15px;
  height: 5px;
  background-color: #E02020;
}
.mi-ka .img-box{
  width: 810px;
  height: 390px;
}
.mi-ka .img-box>img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mi-ka .content{
  width: 380px;
  height: 390px;
  box-sizing: border-box;
  padding:20px 30px;
  font-size: 14px;
  letter-spacing: 3px;
  line-height: 25px;
}
.content .con-btn{
  display: inline-block;
  background-color: #E02020;
  padding: 15px 20px;
  font-size: 14px;
  margin-top: 20px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
.content .con-btn>img{
  position: relative;
  top: 4px;
}
</style>

