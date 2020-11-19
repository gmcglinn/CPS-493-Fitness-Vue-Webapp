  
<template>
  <div class="root">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
export default defineComponent({
  components: { Header }
})
</script>