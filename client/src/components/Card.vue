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
    <footer class="card-footer">
    <a @click="likePost" class="card-footer-item">${{liked}}</a>
    <a href="#" class="card-footer-item">Share</a>
    <a href="#" class="card-footer-item">Follow Username</a>
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
           liked:false,
           Post: this.PostID,
           SinglePost: axios.post('http://localhost:8081/getPost', {ID: this.PostID.PostID}).then( response => {
            console.log(this.PostID.PostID)
            console.log(response.data);
            this.SinglePost = response.data[0];
          })
        }
    },
    methods: {
        likePost(){
          this.liked=true;
      }
    }
}
</script>
<style>
</style>