<template>
    <div style="margin-top: 1EM" class="card">
    
    <div class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">{{SinglePost.Title}}</p>
            <p class="subtitle is-6">{{SinglePost.CreatorUsername}}</p>
        </div>
        </div>

        <div class="content">
        <span v-html="SinglePost.PostContent"></span>
        <br><br>
        <time>{{SinglePost.CreatedTime}}</time>
        <br>
        <p>{{SinglePost.Location}}</p>
        </div>
    </div>
    <footer v-if='this.$store.state.isLogged' class="card-footer">
    <a @click="likePost"  class="card-footer-item">{{liked}}</a>
    <a @click="copyPostLink" class="card-footer-item">Share</a>
    <a href="#" class="card-footer-item">Follow {{SinglePost.CreatorUsername}}</a>
  </footer>
    </div>
</template>

<script>
const axios = require('axios');
//const moment = require('moment');
export default{
    name: 'Card',
    props : ['PostID'],
    data(){
        return{
           Post: this.PostID,
           SinglePost: axios.post('https://fitapp-fall2020-api.herokuapp.com/getPost', {ID: this.PostID.PostID}).then( response => {
            this.SinglePost = response.data[0];
          }),
             liked: 
                axios.post('https://fitapp-fall2020-api.herokuapp.com/getLikedStatus', {IDPost: this.PostID.PostID,IDUser:this.$cookie.getCookie('user').UserID}).then( response => {
                  if(response.data[0]==null) this.liked = "♡";
                  else this.liked = "❤️";
              }),
        }
    },
    methods: {
        likePost(){
        if(this.$store.state.isLogged){
          if(this.liked=="♡") {
              this.liked = "❤️️";
              axios.post('https://fitapp-fall2020-api.herokuapp.com/likePost', { 
                IDPost: this.PostID.PostID,IDUser:this.$cookie.getCookie('user').UserID })
          }
          else {
            this.liked = "♡"
            axios.post('https://fitapp-fall2020-api.herokuapp.com/unlikePost', { 
                IDPost: this.PostID.PostID,IDUser:this.$cookie.getCookie('user').UserID })
          }}
      },
    //   copyPostLink(){
    //        var copyText = "http://localhost:8080/"+ this.SinglePost.PostID;
    //         copyText.select();
    //         copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    //         document.execCommand("copy");
    //         alert("Copied post link");
    //   }
    }
}
</script>
<style>
</style>