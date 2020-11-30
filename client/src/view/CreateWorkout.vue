<template>
<div id="registerStyle">
    
    <h1 style="margin:auto;size:80">New Post</h1>
    <form>

        <div class="field">
        <label class="label">Title</label>
        <div class="control">
            <input v-model="title" class="input" type="title" placeholder="Name your workout">
        </div>
        </div>

        <div class="field">
        <label class="label">Location</label>
        <div class="control">
            <input v-model="location" class="input" type="text" placeholder="Where did you Workout?">
        </div>
        </div>
        <label class="label">{{inputNum}} Total Movement(s) Selected</label>
            
            
<!--scrapping cardio for now, I was planning on changing reps/sets/weight to be time, intensity/distance if selected type was positive for cardio-->
            <div id="numMovements">
                <li v-for="n in inputNum" :key="n.id">
                    {{previousSelect[n-1]}} {{postSets[n-1]}} set(s) of {{postReps[n-1]}} rep(s) for {{postWeight[n-1]}} lbs
                </li>
                
                        <select v-model="selectedType" value="chooseExercise">
                            <option v-for="exercise in currentExercises" :key="exercise.id">{{exercise.Name}}</option>  
                        </select>
                        <div style="display:flex;">
                            <input v-model="sets" class="input" type="text" placeholder="Set(s)"> 
                            <input v-model="reps" class="input" type="text" placeholder="Rep(s)">
                            <input v-model="weight" class="input" type="text" placeholder="lbs">

                        </div>


            <div class="control">
                <button @click.prevent="decrementInput" class="button is-secondary">-</button>
                <button @click.prevent="incrementInput" class="button is-secondary">+</button>
            </div>
            
            
        </div>
        
        <hr>
        <div class="control">
            <button @click.prevent="postPost" class="button is-primary">Make Post</button>
        </div>


    </form>
    
</div>
</template>

<script>
const axios = require('axios');
export default{
    data(){
        return{
           title:"",
           selectedType:null,
           previousSelect:[],
           location:"",
           sets:null,
           reps:null,
           weight:null,
           postSets:[],
           postReps:[],
           postWeight:[],
           postContent:"",
           inputNum:0,
           currentExercises: 
                axios.get('http://localhost:8081/getAllExercisesFull').then( response => {
                  this.currentExercises = response.data;
                  
              }),
        }
    },
    methods: {
        incrementInput(){
            if(this.selectedType != null && this.sets != null && this.reps != null && this.weight != null){
                this.inputNum++;
                this.previousSelect.push(this.selectedType);
                this.postSets.push(this.sets);
                this.postReps.push(this.reps);
                this.postWeight.push(this.weight);
                this.selectedType = null;
                this.sets = null;
                this.reps = null;
                this.weight = null;
            }
            
        },
        decrementInput(){
            if(this.inputNum>1) this.inputNum--;
            this.previousSelect.pop();
            this.postSets.pop();
            this.postReps.pop();
            this.postWeight.pop();
        },
        postPost(){
            
            for(var x = 0; x < this.previousSelect.length;x++){
                this.postContent= this.postContent + this.previousSelect[x] + ' ' + this.postSets[x] + 'x' + this.postReps[x] + ' ' + this.postWeight[x] + 'lb<br>';
            }
            
            axios.post('http://localhost:8081/postPost', { 
                CreatorID:this.$cookie.getCookie('user').UserID,Location:this.location,Title:this.title,PostContent:this.postContent,CreatorUsername:this.$cookie.getCookie('user').Username})
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
            this.$router.push('/')
            this.$forceUpdate();
        
        }
    }
}
</script>
<style>
    #registerStyle {
        margin: auto;
        width: 25%
        
        }


</style>