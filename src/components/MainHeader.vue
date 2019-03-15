<template>
    <div>
        <button v-on:click="logout">logout</button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'MainHeader',
  data: () => {
    return {
      show: true,
      userUid: ''
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut()
        .then((user, show, userUid) => {
          alert('로그아웃 되었습니다')
          this.$router.replace('login')
          this.$store.commit('setUser', this.userUid)
          this.$store.commit('setShow', this.show)
        })
        .catch(() => {
          alert('로그아웃 오류')
        })
    }
  }
}
</script>

<style>

</style>
