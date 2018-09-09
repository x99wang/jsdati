<template>
  <div class="news">
    <inner-title :title="title"></inner-title>
    <div class="news-cards">
      <news-card v-for="item in news" :key="item.id" :news="item"></news-card>
    </div>
  </div>
</template>

<script>
import InnerTitle from './InnerTitle'
import NewsCard from './NewsCard'

export default {
  name: 'NewsBox',
  components: {
    'inner-title': InnerTitle,
    'news-card': NewsCard
  },
  props: {
    title: {
      type: Object,
      default: function () {
        return {
          url: '#',
          name: '',
          describe: ''
        }
      }
    },
    news: {
      type: Array,
      default: function () {
        return [{
          id: 0,
          title: '',
          url: '',
          date: '',
          describe: ''
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
