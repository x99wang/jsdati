<template>
  <div class="footer">
      <links :contents="contents"></links>
  </div>
</template>

<script>
import LinksBox from './LinksBox'

export default {
  name: 'Footer',
  components: {
    'links': LinksBox
  },
  props: {
    contents: {
      type: Array,
      default: function () {
        return [{
          id: 0,
          title: '',
          content: '',
          describe: '',
          link: [{
            id: 0,
            name: '',
            url: ''
          }]
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
