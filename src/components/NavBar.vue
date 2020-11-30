<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" @click="this.$router.push('/')">
      <img src="../images/fitapp-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a @click="this.$router.push('/')" class="navbar-item">
        Home
      </a>

      <a @click="this.$router.push('/search')" class="navbar-item">
        Search
      </a>

      <a v-if='this.$store.state.isLogged' @click="this.$router.push('/myFeed')" class="navbar-item">
        My Feed
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a v-if='this.$store.state.isLogged' class="navbar-link">
          {{this.$store.state.user.Username}}
        </a>

        <div class="navbar-dropdown">
          <a v-if='this.$store.state.isLogged' @click="this.$router.push('/likedPosts')" class="navbar-item">
            My Liked Posts
          </a>
          <a v-if='this.$store.state.isLogged'  @click="this.$router.push('/CreateWorkout')" class="navbar-item">
            Create Workout
          </a>
          <a v-if='this.$store.state.isLogged' @click="this.$router.push('/Settings')" class="navbar-item">
            Settings
          </a>
          <hr class="navbar-divider">
          <a v-if="this.$cookie.getCookie('isAdmin')==1" @click="this.$router.push('/AdminExercise')" class="navbar-item">
            Edit Exercises
          </a>
          <a v-if="this.$cookie.getCookie('isAdmin')==1" @click="this.$router.push('/AdminUsers')" class="navbar-item">
            Admin Users
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a v-if='!this.$store.state.isLogged' @click="this.$router.push('/Register')" class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a v-if='!this.$store.state.isLogged' @click="this.$router.push('/login')" class="button is-light">
            Log in
          </a>
         
          <a v-if='this.$store.state.isLogged' @click="logout" href='/' class="button is-light">
            Log Out
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

document.addEventListener('DOMContentLoaded', () => {

  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});



export default {
    name: "NavBar",
    methods: {
      logout(){
          this.$cookie.removeCookie('isLogged');
          this.$cookie.removeCookie('user');    
          this.$cookie.removeCookie('isAdmin');
      }
    }
}
</script>

<style>

</style>