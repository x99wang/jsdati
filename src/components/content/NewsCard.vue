<template>
    <dl>
      <dt>
        <span class="news-type news-type-notice" title="公告"></span>
        <a :href="news.url" title="news.title">{{news.title}}</a>
      </dt>
      <dd class="date">{{news.date}}</dd>
      <dd>{{news.describe}}</dd>
    </dl>
</template>

<script>
export default {
  name: 'NewCard',
  props: {
    news: Object,
    default: function () {
      return {
        id: 0,
        title: '',
        url: '',
        date: '',
        describe: ''
      }
    }
  }
}
</script>

<style scoped>
  dl {
    box-sizing: border-box;
    float: left;
    padding-left: 50px;
    height: 160px;
    position: relative;
    width: calc(50% - 30px);
    margin: 15px;
  }
  dt {
    font-size: 20px;
    margin-bottom: 5px;
  }
  .news-type {
     position: absolute;
     left: 0;
     top: 0;
   }
  .news-type-notice {
    background: url(https://static.jsdati.com/images/portal-v2/icon-notice.png) no-repeat center center;
  }
  a {
    color: #333;
    display: block;
  }
  dd.date {
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
  }
  dd {
    font-size: 14px;
    color: #666;
    line-height: 1.7;
  }
</style>
