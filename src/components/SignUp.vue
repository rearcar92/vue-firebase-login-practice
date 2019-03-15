<template>
    <div>
        <form>
       <div>
            <label for="email">Email :</label>
            <input type="email" id="email" v-model="email">
       </div>
       <div>
            <label for="password">Password :</label>
            <input type="password" id="password" v-model="password">
       </div>
            <button @click.prevent="signUp">sign up</button>
   </form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          this.$router.replace('login')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
