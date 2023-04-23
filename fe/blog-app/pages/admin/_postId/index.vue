<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"  @submit-post="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "../../../components/admin/admin-post-form.vue";

export default {
  name: "index",
  components: {AdminPostForm},
  layout: 'admin',
  middleware: 'auth',
  asyncData({params, error, $axios}) {
    return $axios.$get(`/posts/${params.postId}.json`)
      .then(data => {
        return {
          loadedPost: {...data, id: params.postId}
        }
      })
      .catch(err => error(err))
  },
  data() {
    return {
      loadedPost: {}
    }
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('editPost', postData)
        .then(() => this.$router.push('/admin'))
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
