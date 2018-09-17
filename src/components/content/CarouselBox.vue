<template>
  <!-- 轮播图 -->
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div v-for="img in imgs"
           :key="img.id"
           v-if="img.id === 0"
           class="carousel-item active">
        <img :src="img.src" :alt="img.name">
      </div>
      <div v-else  class="carousel-item">
        <img :src="img.src" :alt="img.name">
      </div>
    </div>
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="icon-prev" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="icon-next" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CarouselBox',
  props: {
    imgs: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
