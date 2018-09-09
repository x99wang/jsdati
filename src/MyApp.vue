<template>
  <div class="my-app">
    <header-div></header-div>
    <jumbotron></jumbotron>
    <introduce :title="titleOne" :cards="cardsOne"></introduce>
    <introduce :title="titleTwo" :cards="cardsTwo"></introduce>
    <news-div :title="titleThree" :news="news"></news-div>
    <footer-div></footer-div>
  </div>
</template>

<script>
import Header from './components/headers/Header'
import Jumbotron from './components/content/Jumbotron'
import IntroduceBox from './components/content/IntroduceBox'
import NewsBox from './components/content/NewsBox'
import Footer from './components/footers/Footer'
export default {
  name: 'MyApp',
  components: {
    'header-div': Header,
    'jumbotron': Jumbotron,
    'introduce': IntroduceBox,
    'news-div': NewsBox,
    'footer-div': Footer
  },
  data () {
    return {
      titleOne: {
        url: '#',
        name: '我们的优势',
        describe: '5大优势，助力您的业务稳步上升。'
      },
      cardsOne: [
        {
          id: 0,
          image: 'https://static.jsdati.com/images/portal-v2/bigicon-1.png',
          imgDescribe: '工作性能稳定',
          cardDescribe: '国内22台Intel至强32核 64G服务器'
        }, {
          id: 1,
          image: 'https://static.jsdati.com/images/portal-v2/bigicon-2.png',
          imgDescribe: '准确率高',
          cardDescribe: '7x24小时不间断人工处理'
        }, {
          id: 2,
          image: 'https://static.jsdati.com/images/portal-v2/bigicon-3.png',
          imgDescribe: '作者利益高',
          cardDescribe: '7x24小时不间断提供返利'
        }, {
          id: 3,
          image: 'https://static.jsdati.com/images/portal-v2/bigicon-4.png',
          imgDescribe: '智能解析',
          cardDescribe: '全球多达数百个加速节点，为您提供最快速的传输方式。'
        }, {
          id: 4,
          image: 'https://static.jsdati.com/images/portal-v2/bigicon-5.png',
          imgDescribe: '专业的开发团队',
          cardDescribe: '故障高效修复，为您的业务24小时保价护航'
        }
      ],
      titleTwo: {
        url: '#',
        name: '我们能做什么',
        describe: 'WHAT CAN WE DO'
      },
      cardsTwo: [
        {
          id: 0,
          image: 'https://static.jsdati.com/images/portal-v2/bigicon-6.png',
          imgDescribe: '文字识别',
          cardDescribe: '各种票据，快递单号录入，为您带来高效的工作体验'
        }, {
          id: 0,
          image: 'https://static.jsdati.com/images/portal-v2/bigicon-7.png',
          imgDescribe: '图像识别',
          cardDescribe: '智能鉴黄，告别传统人工审核 。识别广告图片中的字符内容信息，辅助人工过滤各类诈骗、微商等小广告图片，净化互联网UGC类产品。'
        }
      ],
      titleThree: {
        url: '#',
        name: '新闻公告',
        describe: 'NEWS & NOTICE'
      },
      news: [
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
</script>

<style scoped>

</style>
