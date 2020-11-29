<template>
  <div>
    <div class="center-column" id="feedStyle">
      <!-- Add the feed here v-for every ID -->
      <Card/>
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
           username:null,
           password:null,
        }
    },
    methods: {
        async getPost() {
            let response = await axios.post('http://localhost:8081/login', {username: this.username, password: this.password })

            this.$store.commit('login',response.data[0])
            console.log(response.data);
            console.log(this.$store.state.isLogged);
            this.$cookie.setCookie('isLogged', true)
            this.$cookie.setCookie('user', response.data[0])
            this.$router.push('/')
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