<template>
  <div >
    
      <div class="field">
        <label class="label">Search for Posts</label>
        <div class="control">
          <!-- <Autocomplete v-bind="searchField" @input="getSuggestions" :results="items" id="typeahead" max:15>
            <div class="display-item">
            </div>
          </Autocomplete> -->

          



            <input v-model="searchField" class="input" type="text" autocomplete="off" @input="getSuggestions" @focus="modal = true">

            <div v-if="results && modal">
              <ul class="autosuggestions">
                  <li class="listofResults" v-for="result in results" :key="result.id" @click="setSearch(result.Title)">{{result.Title}}</li>

              </ul>

            </div>
            
        </div>
        </div>
        <div class="control">
            <button @click.prevent="search" class="button is-primary">Search</button>
        </div>

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

// import Autocomplete from 'vue3-autocomplete'
// import 'vue3-autocomplete/dist/vue3-autocomplete.css'


const axios = require('axios');
export default{
    name: 'SearchPage',
    components:{
        Card,
        GuestCard,
        //Autocomplete
        
    },
    data(){
        return{
            searchField:"",
            PostIDs:null,
            results:[],
            autofill:[],
            modal:false,
        }
        
      },
      methods: {
        async search() {
            let response = await axios.post('https://fitapp-fall2020-api.herokuapp.com/searchPosts', {field: this.searchField })
            this.PostIDs = response.data;
            },
        async getSuggestions(){
              let response = await axios.post('https://fitapp-fall2020-api.herokuapp.com/searchPostsSugg', {field: this.searchField })
              this.results = response.data;
              console.log(this.results)
              //console.log(this.items)
              console.log(this.searchField)
            },
        setSearch(search){
          this.searchField = search;
          this.modal = false;
        }
            
    
    }
   
}

</script>

<style>
#feedStyle {
        margin: auto;
        width: 25%
        
        }
.autosuggestions{
  width: 300px;
  font-size:20px;
  background-color:aliceblue;
}
.listofResults{
  border-color:black;
  border-width:.5px;
  border-style: outset;
  cursor: pointer;
}
/* .deselectionBlanket{
  background-color:red;
  position: absolute;
  inset:0;
} */
</style>