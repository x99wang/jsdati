<template>
  <div class="links-box clearfix">
    <dl v-for="links in contents"
        :key="links.id">
      <dt>
        <h2>{{links.title}}</h2>
      </dt>
      <dd v-if="links.content === ''">
        <a v-for="item in links.link"
          :key="item.id"
          v-if="item.url !== ''"
          :href="item.url"
          :title="item.name">{{item.name}}</a>
      </dd>
      <dd v-else class="font-Impact font24">{{links.content}}</dd>
      <dd v-if="links.describe !== ''" class="gray">{{links.describe}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'LinksBox',
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
    }
  }
}
</script>

<style scoped>
  .links-box {
    padding-bottom: 30px;
  }
  .links-box dl {
    float: left;
    width: 25%;
  }
  .links-box h2 {
    font-size: 20px;
    padding-bottom: 10px;
  }
  .links-box dd a {
    margin-right: 15px;
    color: #fff;
    opacity: .6;
    filter: opacity(alpha=60);
  }
</style>
