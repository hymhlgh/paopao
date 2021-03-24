<template>
  <div class="header-nav">
    <div class="nav">
      <div class="logo-box">跑跑体育</div>
      <ul class="nav-box">
        <li><nuxt-link to="/">首页</nuxt-link></li>
        <li><nuxt-link to="/a">旗下品牌</nuxt-link></li>
        <li><nuxt-link to="/b">公司简介</nuxt-link></li>
        <li><nuxt-link to="/v">联系我们</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.header-nav {
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, .8);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.nav {
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
.nav .logo-box{
  width: 120px;
  color: #FFFFFF;
}
.nav-box{
  flex: 1;
  height: 100%;
  text-align: right;
}
.nav-box li{
  height: 100%;
  display: inline-block;
}
.nav-box li a{
  display: block;
  height: 80px;
  line-height: 80px;
  font-weight: 500;
  color: #FFFFFF;
  letter-spacing: 1px;
  margin-left: 46px;
  position: relative;
}
</style>