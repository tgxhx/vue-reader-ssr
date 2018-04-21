<template>
  <div id="app">
    <!--<header-el></header-el>-->
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
  // import home from './components/Home.vue'
  export default {}
</script>

<style lang="scss">
</style>
