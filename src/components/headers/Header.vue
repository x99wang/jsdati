<template>
  <div class="header">
    <p>This is Header</p>
    <div>
      <navigation></navigation>
      <login-button></login-button>
    </div>
    <logo-image></logo-image>
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
  }
}
</script>

<style scoped>

</style>
