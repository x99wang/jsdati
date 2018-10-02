<template>
  <div class="footer">
    <links :contents="contents"></links>
    <notice :notice="notice"></notice>
    <p class="copyright lh20">{{copyright}}</p>
    <beian :information="inf"></beian>
  </div>
</template>

<script>
import LinksBox from './LinksBox'
import NoticeBox from './NoticeBox'
import BeianBox from './BeianBox'
export default {
  name: 'Footer',
  components: {
    'links': LinksBox,
    'notice': NoticeBox,
    'beian': BeianBox
  },
  props: {
    contents: {
      type: Array,
      default: function () {
        return [
          {
            id: 0,
            title: '用户帮助',
            content: '',
            describe: '',
            link: [{
              id: 0,
              name: '文档中心',
              url: '/docs'
            }, {
              id: 1,
              name: '服务价格',
              url: '/docs/price'
            }]
          }, {
            id: 1,
            title: '关于我们',
            content: '',
            describe: '',
            link: [{
              id: 0,
              name: '公司介绍',
              url: '/about'
            }, {
              id: 1,
              name: '联系我们',
              url: '/contact'
            }]
          }, {
            id: 2,
            title: '客服QQ:',
            content: '800083570',
            describe: '',
            link: []
          }, {
            id: 3,
            title: '关于我们',
            content: '18270569376',
            describe: '周一至周六 8:30-18:00',
            link: []
          }
        ]
      }
    },
    notice: {
      type: Object,
      default: function () {
        return {
          title: '免责声明',
          content: '联众平台仅为残障人士以及有需要的个人和企业提供图像识别和图像识别分类服务，并不针对任何网站或个人。所有图片以及其他图像，均由用户或软件商上传。如有不妥请联系客服进行处理，联众对此不承担任何保证责任。如用作违法用途，一经发现我们会立即封号，递交相关执法部门处理，请广大用户自觉遵守国家相关法律法规。其他单位或者个人如果发现我平台用户侵害到了您的利益，请联系我们。欢迎举报！',
          tel: '举报电话：18270569376',
          qq: '举报QQ ：800083570'
        }
      }
    },
    copyright: {
      type: String,
      default: function () {
        return 'Copyright © 2008-2018\n' +
          '            地址：江西省宜春市袁州区环城西路御湖城4栋-03。'
      }
    },
    inf: {
      type: Object,
      default: function () {
        return {
          record: '赣ICP备17006631号-1',
          url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36090202000059',
          img: 'https://static.jsdati.com/images/portal-v2/gaba.png',
          parent: '赣公网安备36090202000059号'
        }
      }
    }
  }
}
</script>

<style scoped>
  .footer {
    background: #38464c;
    color: #fff;
    padding: 80px 0;
  }
  .copyright {
    padding-top: 30px;
  }
</style>
