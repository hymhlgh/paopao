<template>
  <div class="home">
    <!-- banner-->
    <div class="video-box"
      v-for="(item,index) in bannerData"
      :key="index"
    >
      <video autoplay muted loop class="video" v-if="item.fileType == 2">
        <source
          type="video/mp4"
          :src="item.mediaUrl">
      </video>
      <img class="video" v-else :src="item.mediaUrl" alt="">
      <div class="title scroll-title">{{item.title}}</div>
      <div class="click-btn" target="_blank" @click="gotoPage(item)">
        CLICK HERE
      </div>
      <!-- <a class="click-btn" :href="item.pageUrl" target="_blank">CLICK HERE</a> -->
      <div class="tiao"></div>
    </div>

    <!--跑跑体育 轮播-->
    <div class="pao-swiper" v-if="swiperData.conData && swiperData.imgData">
        <div class="pao-con">
          <div class="swiper-container swiper-con swiper-container-vertical">
            <div class="swiper-wrapper">
              <div class="swiper-slide"
                v-for="(item,index) in swiperData.conData"
                :key="index"
              >
                <div class="slide-box">
                  <div class="title-box">
                    <h2 :class="['title',spIndex == index ? 'dong-title':'']">{{item.title}}</h2>
                  </div>
                  <p :class="['dec',spIndex == index ? 'dong-dec':'']">
                   {{item.content}}
                  </p>
                  <div
                    :class="['pao-btn',spIndex == index ? 'dong-pao-btn':'']"
                    @click="gotoPage(item)"
                    target="_blank">CLICK HERE
                    <img src="~/assets/img/jthei.png" />
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="img-box">
          <div class="swiper-container swiper-img">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide-img-box"  v-for="(item,index) in swiperData.imgData"
                :key="index">
                  <div
                    :class="['swiper-box-img',spIndex == index ? 'dong-swiper-box-img':'']"
                    class="swiper-box-img">
                     <img :src="item" />
                  </div>
                </div>
            </div>
          </div>
        </div>
       <!--自定义圈圈-->
       <div class="quan-box">
         <div
          :class="['quan-item',spIndex == index ? 'quan-item-active':'']"
          v-for="(item,index) in swiperData.conData"
          :key="index"
          @click="hanldSwiper(index)"
         ></div>
       </div>
    </div>
    <!--跑跑米卡-->
    <div class="mi-ka" v-if="pipiData">
      <h2 class="title scroll-title">{{pipiData.title}}</h2>
      <div class="img-box">
        <img v-if="pipiData.mediaType == 1" :src="pipiData.mediaUrl" />
        <video v-if="pipiData.mediaType == 2" controls :src="pipiData.mediaUrl"></video>
      </div>
      <div class="content">
        <p class="dec scroll-title">{{pipiData.content}}</p>
        <div class="con-btn" @click="gotoPage(pipiData)">CLICK HERE
          <img src="~/assets/img/jiantou.png" />
        </div>
      </div>
    </div>
    <img
       v-if="iconShow"
      @click.stop.prevent="menuOpenMe(1)"
      class="menu-open"
      src="~/assets/img/right.png" />
    <!--悬浮菜单-->
    <ul :class="menuPiShow">
      <li
        :class="['menu-item',index == menuIndex ? 'menu-active' : '']"
        v-for="(item,index) in menuData"
        :key="index"
        @click="changMenu(index,item)"
      >{{item.title}}</li>
      <img
        v-if="!iconShow"
        @click="menuOpenMe(0)"
        class="menu-open-child"
        src="~/assets/img/left.png" />
    </ul>
  </div>

</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
var mySwiperCon = null;
var mySwiperImg = null;
export default {
  components: {
    AppLogo
  },
  data () {
    return {
      menuIndex: 0, // 悬浮菜单
      spIndex: 0, // 轮播
      menuPiShow: 'menu-piao',
      iconShow: true
    }
  },
  async asyncData({app}){
    let res = await app.$axios.$post('http://124.222.155.186:8081/api/home/list')
    let swiperData = {
      conData: [],
      imgData: []
    }
    let bannerData = []
    let menuData =[]
    let pipiData = null
    // 域名
    // let comUrl = "http://124.222.155.186:8081/svc"
    let comUrl = "/svc"
    if (res.code == 200) {
      // banner
      if (Array.isArray(res.data.home_1)) {
        res.data.home_1.forEach(item => {
          bannerData.push({
            title: item.title || "跑跑体育",
            pageUrl: item.pageUrl,
            isOutJoin: item.isOutJoin,
            openType: item.openType,
            mediaUrl: comUrl + item.filesList[0].fileUrl,
            fileType: item.filesList[0].fileType || 1
          })
        })
      }
      // 轮播
      if (Array.isArray(res.data.home_2)) {
        res.data.home_2.forEach(item => {
          swiperData.conData.push({
            title: item.title,
            content: item.content,
            pageUrl: item.pageUrl,
            isOutJoin: item.isOutJoin,
            openType: item.openType,
          })
          swiperData.imgData.push(comUrl + item.filesList[0].fileUrl)
        })
      }
      // 底部菜单
      if (Array.isArray(res.data.brand_1)) {
        res.data.brand_1.forEach(item => {
          menuData.push({
            title: item.title,
            content: item.content,
            pageUrl: item.pageUrl,
            id: item.id,
            mediaUrl: comUrl + item.filesList[0].fileUrl,
            mediaType: item.filesList[0].fileType || 1
          })
        })
      }

      let diy1 = res.data.brand_diy1
      if (diy1.length>0){
        let item = diy1[0]
        pipiData = {
          title: item.title,
          content: item.content,
          pageUrl: item.pageUrl,
          id: item.id,
          isOutJoin: item.isOutJoin,
          openType: item.openType,
          mediaUrl: comUrl + item.filesList[0].fileUrl,
          mediaType: item.filesList[0].fileType || 1
        }
      } else if(menuData.length > 0) {
        pipiData = menuData[0]
      }
    }
    return {
      bannerData,
      swiperData,
      menuData,
      pipiData
    }
  },
  methods: {
    hanldSwiper(index){
      if (index == this.spIndex) {
        return false
      }
      mySwiperImg.slideTo(index+1)
      this.spIndex == index
    },
    gotoPage(item){
      if (item.pageUrl == "" || item.pageUrl == null) {
        return false;
      }
      if (item.isOutJoin) { // 外链
        window.open(item.pageUrl);
      } else {
        this.$router.push({
          path: `/detail/${item.pageUrl}`
        })
      }
    },
    menuOpenMe(type){
      if (type == 1) {
        this.menuPiShow = "menu-piao menu-show-xxx"
        this.iconShow = false
      } else {
        this.menuPiShow = "menu-piao"
        this.iconShow = true
      }
    },
    // 切换菜单
    changMenu(index,item) {
      console.log(item)
      this.menuIndex = index
      this.pipiData = item
    },
    // 轮播部分
    initSwiper(){
      var delay = 5000;
      var swiperConLength = this.swiperData.conData.length;
      mySwiperCon = new Swiper ('.swiper-con', {
        direction: 'vertical',
        loop: true, // 循环模式选项
        speed:400,
        autoplay : {
          delay
        },
        on: {
          slideChangeTransitionEnd: (swiper)=>{
            if (mySwiperCon) {
              let index = mySwiperCon.activeIndex
              this.spIndex = (index > swiperConLength) ? 0 : (index - 1);
            }

          },
        },
      })

      mySwiperImg = new Swiper ('.swiper-img', {
        direction: 'horizontal',
        loop: true, // 循环模式选项
        speed:800,
        controller: {
          control: mySwiperCon
        }
      })
      mySwiperCon.controller.control = mySwiperImg
      mySwiperImg.controller.control = mySwiperCon
    }
  },
  mounted() {
    this.initSwiper();

    ScrollReveal().reveal('.scroll-title',{
      duration: 2000,
      distance: '50px'
    });

    ScrollReveal().reveal('.swiper-title',{
      distance: '50px',

    })
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
  background-color: black;
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
  cursor: pointer;
}
.video-box .click-btn:visited,.video-box .click-btn:link{
   color: #fff;
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
  margin: 50px auto;
  display: flex;
  align-items: center;
  position: relative;
}
.pao-swiper .img-box{
  width: 540px;
  height: 600px;
}
.swiper-img .swiper-box-img{
  width: 540px;
  height: 600px;
  overflow: hidden;
  position: relative;
}
/* @keyframes dongImg{
  0%{right: 0%;}
  20%{right: 100%;}
  100%{right: 100%;}
}
.dong-swiper-box-img::after{
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.8);
  position: absolute;
  top: 0;
  right: 0;
  animation: dongImg 5s linear 0.2s 1 alternate;
} */
.swiper-box-img>img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-con{
  width: 420px;
  min-height: 380px;
  max-height: 420px;
}
.slide-box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pao-swiper .img-box>img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pao-swiper .pao-con{
  width: 540px;
  padding: 0px 60px;
  box-sizing: border-box;
  /* display: flex;
  flex-wrap: wrap;
  align-content: center; */
}
.title-box{
  background-color: #fff;
  position: relative;
  top: 30px;
}
.pao-swiper .pao-con .title{
  font-size: 36px;
  line-height: 50px;
  letter-spacing: 2px;
  font-weight: 600;
  margin: 0;
  position: relative;
  overflow: hidden;
  z-index: -1;

}
.pao-swiper .pao-con .dec{
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 1px;
  opacity: 0;
  position: relative;
}
.pao-swiper .pao-con .pao-btn{
  font-size: 14px;
  color: #505050;
  line-height: 20px;
  cursor: pointer;
  position: relative;
  opacity: 0;
}
.pao-swiper .pao-con .pao-btn>img{
  position: relative;
  top: 5px;
  left: 10px;
}

.quan-box{
  position: absolute;
  left: 60px;
  bottom: 2px;
  display: flex;
}
.quan-item{
  width: 6px;
  height: 6px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-right: 5px;
  border-radius: 100%;
  cursor: pointer;
  z-index: 99;
}
.quan-item-active{
  background: rgba(0, 0, 0, 0.6);
}
@keyframes dongTitle{
  0%{top: -20%;opacity: 0;}
  12%{top: -100%;opacity: 1;}
  88%{top: -100%;opacity: 1;}
  100%{top: -20%;opacity: 0;}
}
@keyframes dongDec{
  0%{top: 30px;opacity: 0;}
  12%{top: -15px;opacity: 1;}
  88%{top: -15px;opacity: 1;}
  100%{top: 30px;opacity: 0;}
}

.dong-title{
 animation: dongTitle 5s linear 0.2s 1 forwards;
}
.dong-dec{
  animation: dongDec 4.4s linear 0.6s 1 forwards;
}
.dong-pao-btn{
  animation: dongDec 3.8s linear 1s 1 forwards;
}

/* 跑跑米卡*/
.mi-ka{
  width: 1200px;
  margin: 80px auto;
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
.mi-ka .img-box>video{
  width: 100%;
  height: 100%;
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
.content .dec{
  max-height:370px;
  text-align:justify;
	text-justify:inter-word;
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
/* 底部菜单 */
.menu-open{
  z-index: 999;
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.menu-piao{
  z-index: 998;
  position: fixed;
  left: -110%;
  bottom: 100px;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  box-sizing: border-box;
  padding: 30px;
  padding-left:150px;
  max-width: 800px;
  min-height: 340px;
  display: flex;
  flex-wrap: wrap;
  transition: all 0.5s;
}
.menu-piao .menu-open-child{
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.menu-show-xxx{
  left: 0;
}
.menu-piao .menu-item{
  display: block;
  width: 150px;
  margin: 10px 20px;
  box-sizing: border-box;
  padding: 5px;
  line-height: 25px;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 18px;
}
.menu-piao .menu-item:hover{
  color: #F2DB00;
}
.menu-item.menu-active{
  border:solid 1px #F2DB00;
}
</style>
