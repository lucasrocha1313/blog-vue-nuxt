<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit-post="onSubmitted"/>
    </section>

  </div>
</template>

<script>
import AdminPostForm from "../../../components/admin/admin-post-form.vue";
import axios from "axios";

export default {
  components: {AdminPostForm},
  layout: 'admin',
  methods: {
    onSubmitted(postData) {
      //TODO url to env
      axios.post('xxxx', postData)
        .then(result => console.log(result))
        .catch(err => console.error(err))
    }
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
