<script setup lang="ts">

import Welcome from '../components/Welcome.vue';
import Review from '../components/Review.vue';
</script>

<template>
  
  <Welcome />

  <div class="container" id="aboutlink">
    <p>Click here to find out more about us!</p>
    <RouterLink to="/about"><i class="button" >About</i></RouterLink>
  </div>
 
  <Review />
 

  

</template>

<style scoped>

.container {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}


</style>
