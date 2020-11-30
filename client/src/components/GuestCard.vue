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

    </div>
</template>

<script>
const axios = require('axios');
//const moment = require('moment');
export default{
    name: 'GuestCard',
    props : ['PostID'],
    data(){
        return{
           Post: this.PostID,
           SinglePost: axios.post('http://localhost:8081/getPost', {ID: this.PostID.PostID}).then( response => {
            this.SinglePost = response.data[0];
          })
        }
    },
}
</script>