<template>
  <div class="header-nav">
    <div class="nav">
      <div class="logo-box">
        <img class="logo" src="~assets/img/logo.png" />
      </div>
      <ul class="nav-box">
        <li class="nav-item">
          <nuxt-link :class="$route.path == '/' ? 'header-nav-selected-active':''" to="/">首页</nuxt-link>
        </li>
        <li class="nav-item brand">
          <nuxt-link :class="/(brand|detail)/.test($route.path) ? 'header-nav-selected-active':''" to="/brand">旗下品牌</nuxt-link>
          <ul class="two-menu brand-menu">
            <li class="two-menu-item" :class="$route.path == `/detail/${item.pageUrl}` ? 'two-menu-active':''" v-for="(item, index) in brandNav" :key="index">
              <nuxt-link :to="{name: 'detail-id', params: {id: item.pageUrl}}">{{item.title}}</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="nav-item company-profile">
          <nuxt-link :class="/(companyProfile|elegantDemeanour|achievement)/.test($route.path) ? 'header-nav-selected-active':''" to="/companyProfile">公司简介</nuxt-link>
          <ul class="two-menu company-profile-menu">
            <li class="two-menu-item" :class="$route.path == '/companyProfile' ? 'two-menu-active':''">
              <nuxt-link to="/companyProfile">跑跑体育</nuxt-link>
            </li>
            <li class="two-menu-item" :class="$route.path == '/elegantDemeanour' ? 'two-menu-active':''">
              <nuxt-link to="/elegantDemeanour">赛事风采</nuxt-link>
            </li>
            <li class="two-menu-item" :class="$route.path == '/achievement' ? 'two-menu-active':''">
              <nuxt-link to="/achievement">奖杯奖牌</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <nuxt-link :class="$route.path == '/contactUs' ? 'header-nav-selected-active':''" to="/contactUs">联系我们</nuxt-link>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['brandNav'])
  }
}
</script>
<style scoped>
.header-nav {
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, .8);
  position: fixed;
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
.nav-box .nav-item{
  height: 100%;
  display: inline-block;
  position: relative;
}
.nav-box .nav-item>a::before {
  content: "";
  width: 0%;
  height: 4px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  background-color: #BD0000;
  transition:all .4s;
  -moz-transition:all .4s;
  -webkit-transition:all .4s;
  -o-transition:all .4s;
}
.nav-box .nav-item:hover>a::before {
  width: 100%;
}
.nav-box .nav-item > a{
  display: block;
  height: 80px;
  line-height: 80px;
  font-weight: 500;
  color: #FFFFFF;
  letter-spacing: 1px;
  margin-left: 46px;
  position: relative;
}
.brand:hover .brand-menu {
  display: block;
}
.brand-menu {
  display: none;
}
.company-profile:hover .company-profile-menu {
  display: block;
}
.company-profile-menu {
  display: none;
}

/* 二级菜单 */
.two-menu {
  position: absolute;
  left: 10px;
  width: 140px;
  background: rgba(0, 0, 0, 0.8);
}
.two-menu .two-menu-item {
  display: block;
  width: 100%;
  font-size: 14px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap; 
  padding: 0 10px;
  box-sizing: border-box;
}
.two-menu .two-menu-item:hover a{
  color: #F2DB00;
}
.two-menu .two-menu-item a {
  color: #FFFFFF;
}
.two-menu .two-menu-active {
  background: #E02020;  
}

</style>