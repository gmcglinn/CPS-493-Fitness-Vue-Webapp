<template>
  <div>
    <div class="center-column" id="feedStyle">
      <!-- Add the feed here v-for every ID -->
        <div v-for="Post in PostIDs" :key="Post.PostID" setPostID>
            <Card :PostID="Post">test</Card>
        </div>
        
      
    </div>
     
  </div>
  


</template>

<script>
import Card from '../components/Card'
const axios = require('axios');
export default{
    components:{
        Card
    },
    data(){
        return{
            Followed: axios.post('https://fitapp-fall2020-api.herokuapp.com/getFollowStatus', {IDUser:this.$cookie.getCookie('user').UserID}).then( response => {
            this.Followed = response.data;
          }),
          PostIDs: null

        }
        
      },
      methods: {
          setPostID(){
            axios.post('https://fitapp-fall2020-api.herokuapp.com/getLatestUser', {IDUser:this.Followed}).then( response => {
            this.PostIDs = response.data;
            console.log(this.PostIDs)
          })
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