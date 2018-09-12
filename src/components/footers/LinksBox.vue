<template>
  <div class="links-box">
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
      <dd v-else>{{links.content}}</dd>
      <dd v-if="links.describe !== ''">{{links.describe}}</dd>
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

</style>
