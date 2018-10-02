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
          name: '新闻公告',
          describe: 'NEWS & NOTICE'
        }
      }
    },
    news: {
      type: Array,
      default: function () {
        return [
          {
            id: 0,
            title: '活动通知',
            url: '/news/134',
            date: '2018-04-09',
            describe: '       尊敬的联众用户朋友：\n' +
            '      \n' +
            '      为感谢大家一直以来对平台的包容和厚爱。特此平台周年的日子，推出充值优惠活动。\n' +
            '  活动定于 4月10凌晨开始 至 4月12号 24点结束（3天）届时100...'
          }, {
            id: 1,
            title: '联众春节放假安排',
            url: '/news/133',
            date: '2018-02-07',
            describe: '\n' +
            '\t尊敬的联众用户： \n' +
            '\n' +
            '\n' +
            '\t   大家好。新春佳节将至，联众放假安排如下：2018年2月13日至22日放假，23日（初八）正式上班。\n' +
            '\n' +
            '\n' +
            '\t        \n' +
            '\n' +
            '\n' +
            '\t       放假期间安排客服值班，值班时间 上午10点--12...'
          }
        ]
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
