<template>
<div id="registerStyle">
    
    <h1 style="margin: auto">User Settings</h1>
    <form>

        <div class="field">
        <label class="label">Email</label>
        <div class="control">
            <input v-model="email" class="input" type="email" placeholder=email>
        </div>
        </div>

        <div class="field">
        <label class="label">Username</label>
        <div class="control">
            <input v-model="username" class="input" type="text">
        </div>
        </div>

        <div class="field">
        <label class="label">Password</label>
        <div class="control">
            <input v-model="password" class="input" type="password">
        </div>
        </div>

        <div class="field">
        <label class="label">First Name</label>
        <div class="control">
            <input v-model="firstname" class="input" type="text">
        </div>
        </div>

        <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
            <input v-model="lastname" class="input" type="text">
        </div>
        </div>

        <div class="control">
            <button @click.prevent="submitChanges" class="button is-primary">Submit Changes</button>
        </div>



    </form>
    
</div>
</template>

<script>
const axios = require('axios');
export default{
    data(){
        return{
           user: axios.post('https://fitapp-fall2020-api.herokuapp.com/getUser', {UserID: this.$cookie.getCookie('user')}).then( response => {
            console.log(response.data);
            this.user = response.data;
          }),
           email:null,
           username:null,
           password:null,
        }
    },
    methods: {
        async editUser() {
            await axios.post('https://fitapp-fall2020-api.herokuapp.com/register', { 
                email: this.email, username: this.username, password: this.password })
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
        width: 25%
        
        }


</style>