<template>
  <div class="app-container">
    <app-header/>
    <app-main/>
    <app-footer/>
  </div>
</template>

<script>
/*
* Description layout
* Created By Chasen
* Created At 2019/11/14 9:33
*/
import { AppHeader, AppMain, AppFooter } from './components'

export default {
  name: 'layout',
  props: {},
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .app-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>