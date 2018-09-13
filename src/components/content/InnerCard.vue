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
  .inner-cards dl {
    box-sizing: border-box;
    background: #fff;
    float: left;
    width: -webkit-calc(20% - 5px);
    width: calc(20% - 5px);
    padding: 60px 15px;
    height: 380px;
    margin: 15px 5px 15px 0;
    border-radius: 4px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,.15);
    transition: all .5s ease;
    cursor: default;
  }
  .inner-cards dl dt {
    font-size: 24px;
    line-height: 44px;
    color: #333;
  }
  .inner-cards dl dd {
    color: #666;
    font-size: 14px;
  }
</style>
