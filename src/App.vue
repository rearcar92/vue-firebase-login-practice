<template>
  <div id="app">
    <header>
      <div>
          <router-link v-if="this.$store.state.show" to="/sign">SignUp View</router-link>
          <router-link v-if="this.$store.state.show" to="/login">login View</router-link>
          <router-link v-if="this.$store.state.userUid" to="/main">main View</router-link>
      </div>
    </header>
    <main>
      
    <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #fff;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
