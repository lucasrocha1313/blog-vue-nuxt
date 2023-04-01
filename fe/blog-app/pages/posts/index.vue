<template>
<div class="post-page">
  <PostList />
</div>
</template>

<script>
import PostPreview from "../../components/posts/post-preview.vue";
import PostList from "../../components/posts/post--list.vue";

export default {
  name: "index",
  components: {PostList, PostPreview}
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
