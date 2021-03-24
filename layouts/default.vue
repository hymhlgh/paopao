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
  min-width: 1080px;
}
</style>

