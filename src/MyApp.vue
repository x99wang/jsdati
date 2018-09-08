<template>
  <div class="my-app">
    <header-div></header-div>
    <jumbotron></jumbotron>
    <introduce :title="titleOne" :cards="cardsOne"></introduce>
    <introduce :title="titleTwo" :cards="cardsTwo"></introduce>
    <news></news>
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
    'news': NewsBox,
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
