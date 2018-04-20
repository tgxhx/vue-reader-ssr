<template>
  <div>
    <header-el></header-el>
    about
  </div>
</template>

<script>
  import headerEl from './header.vue'

  export default {
    /*asyncData ({ store, route }) {
      // 触发 action 后，会返回 Promise
      return store.dispatch('getMessage')
    }*/
    components: {
      headerEl
    }
  }
</script>

<style lang="scss">
  body {
    background-color: #ccc;
  }
</style>
