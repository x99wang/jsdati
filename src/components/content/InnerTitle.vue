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

</style>
