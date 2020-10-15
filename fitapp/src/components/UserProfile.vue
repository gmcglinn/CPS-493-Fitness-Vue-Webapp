<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
        <h1 class="user-profile__username">{{ user.username }}</h1>
        <div class="user-profile__admin-badge" v-if="user.isAdmin">
            Admin
        </div>
        <div class="user-profile__follower-count">
            <strong>Followers: </strong> {{ followers }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
    return {
      followers: 0,
      user: {
        id: 1,
        username: 'GeoffMcGlinn',
        firstname: 'Geoffrey',
        lastname: 'McGlinn',
        email: 'mcglinng1@hawkmail.newpaltz.edu',
        isAdmin: true
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount){
      if(oldFollowerCount < newFollowerCount){
        console.log(`${this.user.username} has gained a follower`)
      }
    }
  },
  computed: {
    fullName(){
      return `${this.user.firstname} ${this.user.lastname}`;
    }
  },
  methods: {
    followUser(){
      this.followers++
    }
  },
  mounted() {
    this.followUser();
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