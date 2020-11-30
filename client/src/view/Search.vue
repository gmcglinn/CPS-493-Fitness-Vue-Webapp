<template>
  <div>
      <div class="field">
        <label class="label">Search for Post</label>
        <div class="control">
            <input v-model="searchField" class="input" type="searchField">
        </div>
        </div>
        <div class="control">
            <button @click.prevent="search" class="button is-primary">Search</button>
        </div>


    <div v-if='this.$store.state.isLogged' class="center-column" id="feedStyle">
      <!-- Add the feed here v-for every ID -->
      <div v-for="Post in PostIDs" :key="Post.PostID">
        
        <Card :PostID="Post"></Card>
      </div>
    </div>
     <div v-if='!this.$store.state.isLogged' class="center-column" id="feedStyle">
      <!-- Add the feed here v-for every ID -->
      <div v-for="Post in PostIDs" :key="Post.PostID">
        
        <GuestCard :PostID="Post"></GuestCard>
      </div>
    </div>
  </div>
  


</template>

<script>
import Card from '../components/Card'
import GuestCard from '../components/GuestCard'
const axios = require('axios');
export default{
    components:{
        Card,
        GuestCard,
        
    },
    data(){
        return{
            searchField:null,
            PostIDs:null
        }
        
      },
      methods: {
        async search() {
            let response = await axios.post('http://localhost:8081/searchPosts', {field: this.searchField })
            this.PostIDs = response.data;
            }
    
    }
   
}

</script>

<style>
#feedStyle {
        margin: auto;
        width: 25%
        
        }
</style>