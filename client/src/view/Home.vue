<template>
  <div>
    <div class="center-column" id="feedStyle">
      <!-- Add the feed here v-for every ID -->
      <div v-for="Post in PostIDs" :key="Post.PostID">
       
        <Card :PostID="Post"></Card>
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
          PostIDs: axios.get('http://localhost:8081/getLatest').then( response => {
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