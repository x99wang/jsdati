<template>
  <div class="my-app">
    <header-div></header-div>
    <footer-div></footer-div>
  </div>
</template>

<script>
import Header from './components/headers/Header'

import Footer from './components/Footer'
export default {
  name: 'MyApp',
  components: {
    'header-div': Header,
    'footer-div': Footer
  }
}
</script>

<style scoped>

</style>
