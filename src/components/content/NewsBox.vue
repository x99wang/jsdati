<template>
  <div class="news">
    <div class="wrap">
      <inner-title :title="title"></inner-title>
      <div class="news-cards mat45 clearfix">
        <news-card v-for="item in news" :key="item.id" :news="item"></news-card>
      </div>
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
  .news {
    background: #fff url(https://static.jsdati.com/images/portal-v2/news-bg.jpg) repeat-x;
    padding-top: 0;
  }
  .news>.wrap {
    background: url(https://static.jsdati.com/images/portal-v2/bg-news.png) no-repeat center top;
    padding-top: 60px;
  }
  .news .wrap {
     width: 70%;
   }
  .news .news-cards {
    margin-right: -15px;
  }
</style>
