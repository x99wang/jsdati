<template>
    <a :href="url"><img :src="image.url" :alt="image.name"></a>
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
