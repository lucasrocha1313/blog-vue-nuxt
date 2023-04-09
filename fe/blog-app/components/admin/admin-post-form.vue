<template>
  <form @submit.prevent="onSave">
    <AppInputControl v-model="editedPost.author">Author Name</AppInputControl>
    <AppInputControl v-model="editedPost.title">Title</AppInputControl>
    <AppInputControl v-model="editedPost.thumbnail">Thumbnail Link</AppInputControl>
    <AppInputControl
      control-type="textarea"
      v-model="editedPost.content">Content</AppInputControl>
    <AppInputControl
      control-type="textarea"
      v-model="editedPost.previewText">Preview Text</AppInputControl>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>

import AppButton from "../ui/app-button.vue";
import AppInputControl from "../ui/app-control-input.vue";

export default {
  name: "AdminPostForm",
  components: {AppButton, AppInputControl},
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post ? {...this.post} : {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
        previewText: ''
      }
    }
  },
  methods: {
    onSave() {
      this.$emit('submit-post', this.editedPost)
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
