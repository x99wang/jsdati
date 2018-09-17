<template>
  <ul class="nav clearfix">
    <li v-for="nav in navs" :key="nav.name">
      <a :href="nav.url" :title="nav.name">{{ nav.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    navs: {
      type: Array,
      default: function () {
        return [
          {name: 'Home', url: '#'},
          {name: 'Docs', url: '/docs'},
          {name: 'VIP', url: '/vip'}
        ]
      }
    }
  }
}
</script>

<style scoped>
  li {
    float: left;
    text-align: right;
  }
  .activity a {
    color: #f5811e;
    font-weight: 700;
    border-color: #f5811e;
  }
  a {
    box-sizing: border-box;
    display: inline-block;
    line-height: 94px;
    padding: 0 15px;
    margin: 0 15px;
    border-bottom: 5px solid transparent;
    font-size: 20px;
    color: #333;
  }
  .nav>li {
    position: relative;
    display: block;
  }
</style>
