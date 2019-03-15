<template>
   <div>
       <form>
       <div>
            <label for="email"></label>
            <input type="email" id="email" v-model="email">
       </div>
       <div>
            <label for="password"></label>
            <input type="password" id="password" v-model="password">
       </div>
            <button @click.prevent="loginUser">login</button>
   </form>
   </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: '',
      show: false
    }
  },
  methods: {
    loginUser () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user, show) => {
          console.log(user)
          this.$store.commit('setUser', user.user.uid)
          this.$store.commit('setShow', this.show)
          this.$router.replace('main')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
form {
    width: 300px;
    margin: 0 auto;
}
input {
    width: 100%;
    line-height: 1.5rem;
    border-radius: 1px;
    border: 1px solid #eee;
    text-align: center;
    margin: 5px 0;
}
input::placeholder {
    opacity: .5;
    color: #000;
}
input:focus::-webkit-input-placeholder { 
    color: transparent;
} 
input:focus::-moz-placeholder {
    color: transparent; 
}
input:focus:-ms-input-placeholder {
    color: transparent; 
}
input:focus::-ms-input-placeholder {
    color: transparent;
}
</style>
