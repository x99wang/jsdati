<template>
  <div class="beian">
    <p>{{information.record}}</p>
    <a :href="information.url">
      <img :src="information.img">
      <p>{{information.parent}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BeianBox',
  props: {
    information: {
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
  .beian {
    width: 390px;
    margin: 0 auto;
  }
  p {
    float: left;
    height: 20px;
    line-height: 20px;
    margin: 0px 0px 0px 5px;
    color: #939393;
  }
  a {
    display: inline-block;
    text-decoration: none;
    height: 20px;
    line-height: 20px;
  }
  a, a img {
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
  }
</style>
