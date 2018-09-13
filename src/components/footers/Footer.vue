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
    },
    notice: {
      type: Object,
      default: function () {
        return {
          title: '',
          content: '',
          tel: '',
          qq: ''
        }
      }
    },
    copyright: String,
    inf: {
      type: Object,
      default: function () {
        return {
          record: '',
          url: '',
          img: '',
          parent: ''
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
