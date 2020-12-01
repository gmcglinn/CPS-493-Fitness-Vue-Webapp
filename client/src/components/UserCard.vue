<template>
    <div style="margin-top: 1EM" class="card">
    
    <div class="card-content">
        <div class="media">
        <div class="media-left">
        </div>
        <div class="media-content">
            <p class="title is-4">{{SingleUser.Username}}</p>
            <p class="subtitle is-6">Name: {{SingleUser.FirstName}} {{SingleUser.LastName}}</p>
            <p class="subtitle is-6">Admin: {{SingleUser.Administrator}}</p>
        </div>
        </div>
    </div>
    <footer class="card-footer">
    <a @click="removeUser"  class="card-footer-item">Remove User</a>
    <a @click="toggleAdmin" class="card-footer-item">Toggle Admin</a>
  </footer>
    </div>
</template>

<script>
const axios = require('axios');
//const moment = require('moment');
export default{
    name: 'ExerciseCard',
    props : ['UserID'],
    data(){
        return{
           SingleUser: axios.post('https://fitapp-fall2020-api.herokuapp.com/getUser', {ID: this.UserID.UserID}).then( response => {
            this.SingleUser = response.data[0];
            console.log(response.data);
          }),
        }
    },
    methods: {
        toggleAdmin(){
            console.log(this.SingleUser.Administrator)
          if(this.SingleUser.Administrator==1){
              axios.post('https://fitapp-fall2020-api.herokuapp.com/toggleAdmin', { 
                IDUser: this.SingleUser.UserID, x:0})
          }
          else {
            axios.post('https://fitapp-fall2020-api.herokuapp.com/toggleAdmin', { 
                IDUser: this.SingleUser.UserID, x:1})
          }
      },
      removeUser(){
           axios.post('https://fitapp-fall2020-api.herokuapp.com/removeUser', { 
                IDUser: this.SingleUser.UserID})
            this.$forceUpdate(); //holding off on for now, is not updating the page real time when removal is done leaving the card on the screen (same for upgrading to admin)
      }
    }
}
</script>
<style>
</style>