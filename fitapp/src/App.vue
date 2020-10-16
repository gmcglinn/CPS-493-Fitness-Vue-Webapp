<template>
<div>
  <div style="float:left; padding:150px">
    <Feed/>
  </div>
  <div style="float:right; padding:150px">
    <LoginBox/>
  </div>


</div>
</template>

<script>
import LoginBox from "./components/LoginBox"
import Feed from "./components/Feed"


export default {
  name: 'App',
  components: { LoginBox, Feed }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #dbdbdb;
  min-height: 100vh;
  background-color:#202125;
}
</style>
