<template>
  <div class="introduce">
    <inner-title :title="title"></inner-title>
    <div class="inner-cards">
      <inner-card v-for="item in cards" :key="item.id" :card="item"></inner-card>
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

</style>
