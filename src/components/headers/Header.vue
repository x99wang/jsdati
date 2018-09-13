<template>
  <div class="header">
    <div class="wrap">
      <div class="top-content clearfix">
        <div class="top-nav">
          <navigation :navs="navs"></navigation>
          <login-button></login-button>
        </div>
        <logo-image :logo="logo"></logo-image>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from './TopNav'
import TopBtn from './TopBtn'
import Logo from './Logo'

export default {
  name: 'Header',
  components: {
    'navigation': TopNav,
    'login-button': TopBtn,
    'logo-image': Logo
  },
  props: {
    logo: {
      type: Object,
      default: function () {
        return {
          url: 'https://www.jsdati.com/',
          image: {
            name: '联众',
            url: 'https://static.jsdati.com/images/portal-v2/logo.png'
          }
        }
      }
    },
    navs: {
      type: Array,
      default: function () {
        return [
          {name: '首页', url: '#'},
          {name: '开发文档', url: '/docs'},
          {name: '价格', url: '/docs/price'},
          {name: 'VIP', url: '/vip'},
          {name: '自助排障', url: '/debug-check'},
          {name: '我要举报', url: '/report'}
        ]
      }
    }
  }
}
</script>

<style scoped>
  .header {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    margin-top: 30px;
    z-index: 99;
  }
  .header .wrap {
    padding-bottom: 0;
  }
  .header .wrap {
    position: relative;
    width: 1200px;
    padding-bottom: 20px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0,0,0,.3);
  }
  .top-content {
    padding: 15px 20px;
  }
  .top-nav {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: -moz-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex
  }
</style>
