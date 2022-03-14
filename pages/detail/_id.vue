<template>
  <div class="container">
    <div class="paopao-poster">
      <div class="h1 scroll-title">旗下品牌</div>
      <div class="h4">BRANDS</div>
    </div>
    <div class="paopao-brand">
      <div class="brand-name">
        {{ data.title }}
      </div>
      <div class="brand-img">
        <img v-if="data.fileType == 1" :src="data.path" alt="" />
        <video v-if="data.fileType == 2" controls :src="data.path"></video>
      </div>
      <div class="brand-desc">
        {{ data.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    let id = "";
    // 根据路由pageUrl获取id
    let res1 = await app.$api.article.brandNavList();
    if (res1.code == 200) {
      res1.data.forEach(v => {
        if (v.pageUrl == params.id) {
          id = v.id;
        }
      });
    }
    let res = await app.$api.article.commonList({
      id: id || "",
      pageType: ""
    });
    let data = {};
    if (res.code == 200) {
      let comUrl = "/svc";
      Object.assign(res.data[0], {
        path: comUrl + res.data[0].filesList[0].fileUrl,
        fileType: res.data[0].filesList[0].fileType
      });
      Object.assign(data, res.data[0]);
    }
    return {
      data
    };
  },
  mounted() {
    ScrollReveal().reveal(".scroll-title", {
      duration: 2000,
      distance: "50px"
    });
  }
};
</script>

<style scoped>
.paopao-poster {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../../assets/img/banner_bg.jpg") no-repeat;
  background-size: cover;
}
.paopao-poster .h1 {
  font-size: 68px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 16px;
  text-align: center;
  margin-bottom: 38px;
}
.paopao-poster .h4 {
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
}
.paopao-brand {
  width: 1080px;
  margin-top: 70px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
}
.paopao-brand .brand-name {
  font-size: 48px;
  font-weight: 600;
  color: #000000;
  position: relative;
}
.paopao-brand .brand-name::after {
  content: "";
  display: block;
  width: 70px;
  height: 5px;
  background: #f2db00;
  position: absolute;
  left: 0;
  bottom: -20px;
  z-index: -1;
}
.paopao-brand .brand-name::before {
  content: "";
  display: block;
  width: 15px;
  height: 5px;
  background: #f2db00;
  position: absolute;
  left: 80px;
  bottom: -20px;
  z-index: -1;
}
.paopao-brand .brand-img {
  width: 100%;
  margin-top: 70px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}
.paopao-brand .brand-img img {
  width: 100%;
  display: block;
}
.paopao-brand .brand-img video {
  width: 100%;
}
.paopao-brand .brand-desc {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  line-height: 26px;
  text-indent: 35px;
}
</style>
