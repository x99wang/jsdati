<template>
  <div class="inner-title">
    <h2>
      <a :href="title.url" title>{{title.name}}</a>
    </h2>
    <p>{{title.describe}}</p>
  </div>
</template>

<script>
export default {
  name: 'InnerTitle',
  props: {
    title: Object,
    default: function () {
      return {
        url: '#',
        name: '',
        describe: ''
      }
    }
  }
}
</script>

<style scoped>
  .inner-title {
    text-align: center;
  }
  .inner-title h2 a {
    letter-spacing: 2px;
    color: #333;
    font-size: 40px;
    font-weight: 700;
    padding: 0 15px 5px;
    background: url(https://static.jsdati.com/images/portal-v2/title-bg.png) no-repeat center bottom;
    background-size: 100% auto;
  }
  .inner-title p {
    color: #666;
    line-height: 35px;
    font-size: 20px;
    margin-top: 10px;
  }
</style>
