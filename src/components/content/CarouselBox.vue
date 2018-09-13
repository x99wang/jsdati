<template>
  <!-- 轮播图 -->
  <div class="carousel slide" data-ride="carousel">
    <ul class="carousel-indicators">
      <li v-for="img in imgs"
          :key="img.id"
          :data-target="img.name"
          :data-slide-to="img.id"></li>
    </ul>

    <div class="carousel-inner">
      <div v-for="img in imgs"
           :key="img.id"
           class="carousel-item">
        <img :src="img.src">
      </div>
    </div>
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
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
