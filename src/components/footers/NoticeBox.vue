<template>
  <div class="notice-box">
    <h3>{{notice.title}}</h3>
    <p>{{notice.content}}</p>
    <dl>
      <dt>{{notice.tel}}</dt>
      <dd>{{notice.qq}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'NoticeBox',
  props: {
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
    }
  }
}
</script>

<style scoped>
  .notice-box {
    padding: 30px;
    border-radius: 6px;
    background: #344046;
    font-size: 16px;
    line-height: 1.6;
  }
  .notice-box h3 {
    font-size: 24px;
  }
  .notice-box p {
    color: #a9b8be;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
