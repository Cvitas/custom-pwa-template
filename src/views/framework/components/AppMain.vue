<template>
  <section class="app-main">
    <keep-alive>
      <router-view v-if="keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!keepAlive"></router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    keepAlive () {
      return this.$route.meta.keepAlive
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
  app-main {
    /*199 = navbar + footer = 60 +139 */
    min-height: calc(100vh - 118px);
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #f6f7fb;
  }
</style>