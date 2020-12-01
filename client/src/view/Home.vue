<template>
  <div>
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
        GuestCard
    },
    data(){
        return{
          PostIDs: axios.get('https://fitapp-fall2020-api.herokuapp.com/getLatest').then( response => {
            //console.log(response.data);
            this.PostIDs = response.data;
            //console.log(this.PostIDs)
          })
        }
        
      },
   
}

</script>

<style>
#feedStyle {
        margin: auto;
        width: 25%
        
        }
</style>