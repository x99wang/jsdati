<template>
<dl class="top-btn">
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
        name: '登陆'
      },
      register: {
        url: '/register',
        name: '注册'
      }
    }
  }
}
</script>

<style scoped>
  .top-btn {
    display: flex;
    margin: 27px 0;
    border-left: 2px solid #eee;
    padding-left: 15px;
  }
  .top-btn>dd, .top-btn>dt {
     height: 100%;
     line-height: 40px;
     padding: 0 15px;
     font-size: 20px;
     color: #333;
   }
</style>
