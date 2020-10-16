<template>
<div>
     <div class="user-profile__login-panel" v-if="!isLogged">
        <h1><strong>Login</strong></h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button @click="login">Login</button>
     </div>
     <div class="user-profile__login-panel" v-else>
        <h1>Welcome Back, <br> {{testUser.firstName}}</h1>
        <p>@{{testUser.username}}</p>
        <br>
        <button @click="logout">Logout</button>
     </div>
</div>
</template>

<script>
export default {
    data(){
    return {
      isLogged: false,
      input: {
        username: "",
        password: ""
      },
      testUser:{
        username: 'GeoffM',
        password: 'password',
        firstName: 'Geoffrey',
        isAdmin: true,
        friends:[
          {id:1, username: 'Test1'},
          {id:2, username: 'Test2'},
          {id:3, username: 'Test3'},
          {id:4, username: 'Test4'},
          {id:5, username: 'Test5'},
        ],
      },
    }
  },
  methods:{
    login() {
       if(this.input.username != "" && this.input.password != "") {
         if(this.input.username == this.testUser.username && this.input.password == this.testUser.password) {
           this.isLogged = true;
           } else {
             alert("The username or password is incorrect");
             }
             } else {
               alert("A username and password must be present");
            }
      },
    logout(){
      this.isLogged = false;
    }
  }
}

</script>


<style>
.user-profile__login-panel{
    padding:50px;
    border-radius: 3px;
    border: 1px solid #73787c;
    background-color: #2d2e30;
    display: flex;
    flex-direction: column;
    
}

</style>