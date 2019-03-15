<template>
    <div class="wrap">
        <login-form></login-form>
        <hello></hello>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import Hello from '../components/Hello.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm
  }
}
</script>

<style>
.wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate( -50%, -50%);
    transform: translate( -50%, -50%);
}
</style>
