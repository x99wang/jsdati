<template>
    <dl>
      <dt><img :src="card.image">{{card.imgDescribe}}</dt>
      <dd>{{card.cardDescribe}}</dd>
    </dl>
</template>

<script>
export default {
  name: 'InnerCard',
  props: {
    card: Object,
    default: function () {
      return {
        id: 0,
        image: '',
        imgDescribe: '',
        cardDescribe: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
