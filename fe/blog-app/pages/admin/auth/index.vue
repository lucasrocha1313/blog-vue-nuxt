<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppInputControl type="email" v-model="email">E-Mail Address</AppInputControl>
        <AppInputControl type="password" v-model="password">Password</AppInputControl>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import AppButton from "../../../components/ui/app-button.vue";
import AppInputControl from "../../../components/ui/app-control-input.vue";

export default {
  name: "index",
  components: {AppInputControl, AppButton},
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      if(this.email !== '' && this.password.length >= 5) {
        this.$store.dispatch('authUser',{
          email: this.email,
          password: this.password,
          isLogin: this.isLogin
        }).then(() => {
          this.$router.push('/admin')
        })
      }
    }
  }
}
</script>

<style scoped>
>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
