<template>
<div id="registerStyle">
    
    <h1 style="margin: auto">Register</h1>
    <p style="margin: auto">Fill in this form to create an account.</p>
    <form>

        <div class="field">
        <label class="label">Email</label>
        <div class="control">
            <input v-model="email" class="input" type="email" placeholder="@email.com">
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

        <div class="control">
            <button @click.prevent="registerUser" class="button is-primary">Register</button>
        </div>

        <hr>
         <div class="container haveaccount">
            <p>Already have an account? <a @click="this.$router.push('/Login')">Sign in</a>.</p>
        </div>



    </form>
    
</div>
</template>

<script>
const axios = require('axios');
export default{
    data(){
        return{
           email:null,
           username:null,
           password:null,
        }
    },
    methods: {
        async registerUser() {
            await axios.post('http://localhost:8081/register', { 
                email: this.email, username: this.username, password: this.password })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
            this.$router.push('/login')
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