<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "../../../components/admin/admin-post-form.vue";

export default {
  name: "index",
  components: {AdminPostForm},
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: 'Tonim',
        title: 'My awesome Post',
        thumbnailLink: 'http://www.ineteconomics.org/uploads/featured/iStock-1140691167.jpeg',
        content: 'Super amazing, thanks for that!',
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
