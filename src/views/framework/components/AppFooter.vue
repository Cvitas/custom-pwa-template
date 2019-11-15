<template>
  <div class="app-footer">
    <div class="footer-wrap">
      <div :class="{'active':currentNav == item.link}" :key="index"
           @click="navClick(item)"
           class="footer-menu"
           v-for="(item,index) in menus">
        <i :class="item.icon" class="menu-icon"></i>
        <span id="ss" class="menu-name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      currentNav: '/',
      menus: [{ name: '首页', link: 'home', icon: 'icon-home', active: 1 },
        { name: 'Menu1', link: 'login', icon: 'icon-xinwen' },
        { name: 'Menu2', link: 'login', icon: 'icon-faxian' },
        { name: 'Menu3', link: 'login', icon: 'icon-user' },
      ]
    }
  },
  methods: {
    navClick (menu) {
      this.$router.push({ name: menu.link })
      this.currentNav = menu.link
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/vars.scss";
  .app-footer {
    height: 70px;
    width: 100%;
    border-top: 1px solid #E3E3E3;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    .footer-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #FFFFFF;
      .footer-menu {
        float: left;
        width: 25%;
        height: 100%;
        position: relative;
        text-align: center;
        font-size: 1.4rem;
        &.active {
          color: #0087D0;
        }
        .menu-icon {
          text-align: center;
          position: absolute;
          top: 8px;
          left: 0;
          right: 0;
        }
        .menu-name {
          position: absolute;
          bottom: 8px;
          left: 0;
          right: 0;
          font-size: $size-small;
        }
      }
    }
  }
</style>
