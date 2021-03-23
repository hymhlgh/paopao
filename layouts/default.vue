<template>
  <div class="container">
    <v-header />
    <nuxt/>
    <v-footer />
  </div>
</template>
<script>
import VHeader from '~/components/Header.vue';
import VFooter from '~/components/Footer.vue';
export default {
  components: {
    VHeader,
    VFooter
  }
}
</script>
<style>
.container{
  width: 100%;
}
html {
  
  /* font-size: 16px; */
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

</style>

