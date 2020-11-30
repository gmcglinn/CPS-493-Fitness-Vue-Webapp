<template>
<div id="registerStyle">
    <h2>Add Exercise</h2>
    <form>

        <div class="field">
        <div class="control">
            <input v-model="newName" class="input" type="newName" placeholder="Name">
        </div>
        </div>

        <label for="isCardio">Cardio? </label>

            <select name="isCardio" id="isCardio">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        <br>

        <div class="control">
            <button @click.prevent="addExercise" class="button is-primary">Add</button>
        </div>



    </form>

    <h1>Edit Exercise</h1>
        
      <!-- Add the feed here v-for every ID -->
      <div v-for="UniqueID in currentExercises" :key="UniqueID.UniqueID">
        
        <ExerciseCard :ExerciseID="UniqueID"></ExerciseCard>
      </div>
        
    
</div>
</template>
<script>
 const axios = require('axios');
 import ExerciseCard from '../components/ExerciseCard'
export default{
    
    components:{
        ExerciseCard
    },
    data(){
        return{
           exerciseR:null,
           newName:null,
           isCardio:null,
           currentExercises: 
                axios.get('http://localhost:8081/getAllExercises').then( response => {
                  this.currentExercises = response.data;
                  console.log(response.data)
              }),
            ExerciseIDs: axios.get('http://localhost:8081/getAllExercises').then( response => {
            //console.log(response.data);
            this.ExerciseIDs = response.data;
            //console.log(this.PostIDs)
          })

        }
    },
    methods: {
        async addExercise() {
            await axios.post('http://localhost:8081/addExercise', { 
                newName:this.newName, isCardio:this.isCardio })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
}       

</script>

<style>
    #registerStyle {
        margin: auto;
        width: 25%;
        margin-top: 10%;
        }


</style>