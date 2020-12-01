<template>
    <div style="margin-top: 1EM" class="card">
    
    <div class="card-content">
        <div class="media">
        <div class="media-left">
        </div>
        <div class="media-content">
            <p class="title is-4">{{SingleExercise.Name}}</p>
            <p class="subtitle is-6">Cardio: {{SingleExercise.isCardio}}</p>
        </div>
        </div>
    </div>
    <footer class="card-footer">
    <a @click="removeExercise"  class="card-footer-item">Remove Exercise</a>
  </footer>
    </div>
</template>

<script>
const axios = require('axios');
//const moment = require('moment');
export default{
    name: 'ExerciseCard',
    props : ['ExerciseID'],
    data(){
        return{
           SingleExercise: axios.post('https://fitapp-fall2020-api.herokuapp.com/getExercise', {ID: this.ExerciseID.UniqueID}).then( response => {
            this.SingleExercise = response.data[0];
            console.log(response.data);
          }),
        }
    },
    methods: {
       removeExercise(){
            axios.post('https://fitapp-fall2020-api.herokuapp.com/removeExercise', { 
                 ID: this.SingleExercise.UniqueID})
             this.$forceUpdate(); //holding off on for now, is not updating the page real time when removal is done leaving the card on the screen
       }
    }
}
</script>
<style>
</style>