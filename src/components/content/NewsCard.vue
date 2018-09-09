<template>
    <dl>
      <dt>
        <span class="news-type" title="公告"></span>
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

</style>
