<template>
  <div>
    <div v-if='this.$store.state.isLogged' class="center-column" id="feedStyle">
      <!-- Add the feed here v-for every ID -->
      
        
        <Card :PostID="PostID"></Card>
      
    </div>
     <div v-if='!this.$store.state.isLogged' class="center-column" id="feedStyle">
      <!-- Add the feed here v-for every ID -->
      
        
        <GuestCard :PostID="PostID"></GuestCard>
      
    </div>
  </div>
  


</template>
<script>
// export default defineComponent({
//   setup(){
//       const router = useRoute();
//       const PostID = computed(() => router.params.id);
//       return {PostID}
//   }
// })
  //This page will eventually be able to grab a unique postID from the url and display just a single post
</script>