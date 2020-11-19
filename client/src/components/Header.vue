<template>
  <div class="text-center my-3">
    <h4>Fit App</h4>
    <div class="d-flex justify-content-center">
      <HeaderLink to="/" exact>Home</HeaderLink>
      <HeaderLink to="/register">Register</HeaderLink>
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