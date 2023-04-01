<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
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
  </div>
</template>

<script>
import PostPreview from "../components/posts/post-preview.vue";

export default {
  name: 'IndexPage',
  components: {PostPreview}
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('./assets/images/main-page-background.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
