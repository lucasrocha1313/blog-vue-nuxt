<template>
<div class="post-page">
  <PostList :posts="loadedPosts"/>
</div>
</template>

<script>
import PostPreview from "../../components/posts/post-preview.vue";

export default {
  name: "index",
  components: {PostPreview},
  computed: {
    loadedPosts() {
      return this.$store.getters.getLoadedPosts
    }
  }
}
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
