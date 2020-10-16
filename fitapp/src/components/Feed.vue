<template>
     <div class="feed__primary">
         Feed Goes Here
         <li class="feed__list" v-for="user in card":key="card.id">
        <div>
          {{ card.user }}
        </div>
        </li>
     </div>
</template>

<script>
export default {
    data(){
    return {
      card:[
        {id: 1, user: 'test1', exercise1: 'Overhead Press 135lb 3 sets for 5 reps', exercise2: 'Bench Press 250lb 4 sets for 3 reps'},
        {id: 2, user: 'test2', exercise1: 'Squat 225lb 3 sets for 8 reps', exercise2: 'Leg Press 365lb 4 sets for 12 reps'}
      ]
    }
  },
}

</script>


<style>
.feed__primary{
    
    overflow: auto;
}

</style>