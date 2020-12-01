<template>
  <div>
    
      <!-- Add the feed here v-for every ID -->
      <div v-for="UserID in UserIDs" :key="UserID.UserID">
        
        <UserCard :UserID="UserID"></UserCard>
      </div>
    
     
  </div>
  


</template>

<script>
import UserCard from '../components/UserCard'

const axios = require('axios');
export default{
    components:{
        UserCard
    },
    data(){
        return{
          UserIDs: axios.get('https://fitapp-fall2020-api.herokuapp.com/getAllUsers').then( response => {
            //console.log(response.data);
            this.UserIDs = response.data;
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