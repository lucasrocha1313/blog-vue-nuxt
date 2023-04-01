<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppInputControl v-model="editedPost.author">Author Name</AppInputControl>
        <AppInputControl v-model="editedPost.title">Title</AppInputControl>
        <AppInputControl v-model="editedPost.thumbnailLink">Thumbnail Link</AppInputControl>
        <AppInputControl
          control-type="textarea"
          v-model="editedPost.content">Content</AppInputControl>
        <AppButton type="submit">Save</AppButton>
        <AppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel">Cancel</AppButton>
      </form>
    </section>

  </div>
</template>

<script>
import AppInputControl from "../../../components/ui/app-control-input.vue";
import AppButton from "../../../components/ui/app-button.vue";

export default {
  name: "index",
  components: {AppButton, AppInputControl},
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    onSave() {
      //TODO save post
      console.log(this.editedPost)
    },
    onCancel() {
      //TODO navigate back
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>

</style>
