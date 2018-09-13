<template>
  <div class="introduce">
    <div class="wrap">
      <inner-title :title="title"></inner-title>
      <div class="inner-cards clearfix mat45">
        <inner-card v-for="item in cards" :key="item.id" :card="item"></inner-card>
      </div>
    </div>
  </div>
</template>

<script>
import InnerTitle from './InnerTitle'
import InnerCard from './InnerCard'

export default {
  name: 'IntroduceBox',
  components: {
    'inner-title': InnerTitle,
    'inner-card': InnerCard
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
    cards: {
      type: Array,
      default: function () {
        return [{
          id: 0,
          image: '',
          imgDescribe: '',
          cardDescribe: ''
        }]
      }
    }
  }
}
</script>

<style scoped>
  .introduce{
    padding: 80px 0;
    background: #e6f3f8 url(https://static.jsdati.com/images/portal-v2/p-bg.png) no-repeat center bottom;
    background-size: cover;
    box-shadow: inset 0 -2px 6px rgba(0,0,0,.05);
  }
  .introduce .wrap {
    width: 70%;
  }
</style>
