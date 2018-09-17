<template>
    <a :href="logo.url"><img :src="logo.image.url" :alt="logo.image.name"></a>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    logo: {
      type: Object,
      default: function () {
        return {
          url: '#',
          image: {
            name: 'Name',
            url: '*.png'
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
