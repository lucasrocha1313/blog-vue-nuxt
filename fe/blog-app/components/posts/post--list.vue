<template>
  <section class="post-list">
    <PostPreview
      id="1"
      title="Hello there!"
      preview-text="This is my first post!"
      thumbnail="https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960" />
    <PostPreview
      id="2"
      title="Hello there 2!"
      preview-text="This is my second post!"
      thumbnail="https://hips.hearstapps.com/hmg-prod/images/coolest-tech-2022-1669144775.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" />
    <PostPreview
      id="3"
      title="Hello there 3!"
      preview-text="This is my third post!"
      thumbnail="http://www.ineteconomics.org/uploads/featured/iStock-1140691167.jpeg" />
  </section>
</template>

<script>
import PostPreview from "./post-preview.vue";

export default {
  name: "post--list",
  components: {PostPreview}
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
