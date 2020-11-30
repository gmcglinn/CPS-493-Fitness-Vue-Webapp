<template>
<div id="registerStyle">
    
    <h1>Remove Exercise</h1>
    <form>
        <div v-for="Name in currentExercises" :key="Name.id">

        <label for="exerciseR">Choose an exercise:</label>
            <select name="exerciseR" id="exerciseR">
                <optgroup label="Weightlifting">
                <option value="volvo">1</option>
                <option value="saab">1</option>
                
            </optgroup>
            <optgroup label="Cardio">
                <option value="mercedes">2</option>
                <option value="audi">2</option>
            </optgroup>
            </select>
        </div>

        <div class="control">
            <button @click.prevent="removeExercise" class="button is-primary">Remove</button>
        </div>
        <br><hr>

    </form>
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
    
</div>
</template>
<script>
 const axios = require('axios');
export default{
    data(){
        return{
           exerciseR:null,
           newName:null,
           isCardio:null,
           currentExercises: 
                axios.get('http://localhost:8081/getExercises').then( response => {
                  this.currentExercises = response.data;
              }),

        }
    },
    methods: {
        async removeExercise() {
            await axios.post('http://localhost:8081/removeExercise', { 
                exerciseR:this.exerciseR })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
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