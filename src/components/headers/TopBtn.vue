<template>
<dl>
  <dt><a :href="login.url">{{ login.name }}</a></dt>
  <dd><a :href="register.url">{{ register.name }}</a></dd>
</dl>
</template>

<script>
export default {
  name: 'TopBtn',
  data () {
    return {
      login: {
        url: '/login',
        name: 'Login'
      },
      register: {
        url: '/register',
        name: 'Register'
      }
    }
  }
}
</script>

<style scoped>

</style>
