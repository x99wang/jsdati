<template>
  <ul>
    <li v-for="nav in navs" :key="nav.name">
      <a :href="nav.url" :title="nav.name">{{ nav.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      navs: [
        {name: 'Home', url: '#'},
        {name: 'Docs', url: '/docs'},
        {name: 'VIP', url: '/vip'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
