<template>
  <div class="app-header">
    <div @click="goBack" class="header-left">
      <span class="back"><i class="icon-back"></i>返回</span>
    </div>
    <div class="header-center">
      <span class="header-name">标题</span>
    </div>
  </div>
</template>

<script>
/*
* Description AppHeader
* Created By Chasen (caoxin@codyy.com))
* Created At 2019/11/14 9:34
*/
export default {
  name: 'AppHeader',
  props: {},
  data () {
    return {
      back: '返回'
    }
  },
  computed: {
    getTitle () {
      return this.$store.state.title
    },
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/vars.scss";
  .app-header {
    height: 48px;
    line-height: 48px;
    background: #FF3A58;
    font-size: 1rem;
    color: #FFFFFF;
    .header-left {
      float: left;
      height: 100%;
      width: 20%;
      .back {
        padding-left: $size-mini;
      }
    }
    .header-center {
      width: 60%;
      text-align: center;
      float: left;
      overflow: hidden;
      height: 100%;
    }
    .header-right {
      float: left;
      height: 100%;
      width: 20%;
      text-align: right;
      .go {
        background: #FFFFFF;
        color: #FF3A58;
        text-align: center;
        padding: 5px 10px;
        margin-right: 5px;
        border-radius: 5px;
      }
    }
  }
</style>