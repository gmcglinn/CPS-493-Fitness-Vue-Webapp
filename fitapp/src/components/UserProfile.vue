<template>
  <div class="user-profile">
    
    
    
    <div class="user-profile__user-panel" v-if="isLogged">
        <h1 class="user-profile__username">{{ user.username }}</h1>
        <div class="user-profile__admin-badge" v-if="user.isAdmin">
            Admin User
        </div>
        <div class="user-profile__admin-badge" v-else>
            Standard User
        </div>
    </div>
    <div class="user-profile__user-panel" v-else>
        <h1 class="user-profile__username"> Login </h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>

    <div class="user-profile__cards" v-for="cards in user.cards" :key="cards.id">
      {{cards.user}}
    </div>
  </div>

</template>

<script>
export default {
    data(){
    return {
      isLogged: false,
      user: {
        id: 1,
        username: 'GeoffM',
        password: 'password',
        isAdmin: true,
        isLogged: true,
        cards:[
          {id: 1, user:'MosheP', type:'Upper', exercise:[
            {id: 1, exercise: 'Overhead Press', sets: 2, reps: 8},
            {id: 2, exercise: 'Bench Press', sets: 3, reps: 4}
          ]},
          {id: 1, user:'JohnS', type:'Cardio', exercise:[
            {id: 1, exercise: 'Jogging', time: 120},
          ]}
        ]
      },
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
     login() {
       if(this.input.username != "" && this.input.password != "") {
         if(this.input.username == this.user.username && this.input.password == this.user.password) {
           this.isLogged = true;
           } else {
             console.log("The username and / or password is incorrect");
             }
             } else {
               console.log("A username and password must be present");
            }
      },
}
}
</script>

<style>
.user-profile{
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;
}
.user-profile__user-panel{
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: #2d2e30;
    border-radius: 5px;
    border: 1px solid #73787c;
}
.user-profile__admin-badge{
    background: coral;
    color: black;
    border-radius: 5px;
    margin-right: auto;
    padding: 0 10px;
    font-weight: bold;
}

h1{
    margin: 0;
}
</style>