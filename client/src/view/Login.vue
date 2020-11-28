<template>
<div id="registerStyle">
    
    <h1 style="margin: auto">Login</h1>
    <form>

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
            <button @click.prevent="loginUser" class="button is-primary">Login</button>
        </div>



    </form>
    
</div>
</template>

<script>
const axios = require('axios');
export default{
    data(){
        return{
           username:null,
           password:null,
        }
    },
    methods: {
        async loginUser() {
            let response = await axios.post('http://localhost:8081/login', {username: this.username, password: this.password })

            this.$store.commit('login',response.data[0])
            console.log(response.data);
            console.log(this.$store.state.isLogged);
            this.$cookie.setCookie('isLogged', true)
            this.$cookie.setCookie('user', response.data[0])
            this.$router.push('/')
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