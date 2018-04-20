<template>
  <div id="app">
    <!--<header-el></header-el>-->
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">

</style>
