
<template>
  <div>
    <h4>Cat 🐱 Facts</h4>
    <div>
      <HeaderLink to="/" exact>Home</HeaderLink>
      <HeaderLink to="/search">Search</HeaderLink>
      <HeaderLink to="/myWorkouts">My Workout</HeaderLink>
      <HeaderLink to="/facts">List</HeaderLink>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderLink from './HeaderLink.vue'
export default defineComponent({
  components: { HeaderLink }
})
</script>