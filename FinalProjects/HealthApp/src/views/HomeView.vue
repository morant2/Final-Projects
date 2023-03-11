<script setup lang="ts">
import LoginBadge from '../components/LoginBadge.vue';
</script>

<template>
  <div class="container" id="header">
    <h1 class="title">
      Welcome to my incredibly generic health app.
    </h1>
  </div>

  <div class="container" id="aboutlink">
    <p>Click here to find out more about us!</p>
    <RouterLink to="/about"><i class="button" >About</i></RouterLink>
  </div>

  <div class="container" id="signup">
   <p>Login to access your data, or sign up to start tracking!</p>
    <LoginBadge />
  
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
}

#header {
  background-color: #f5f5f5;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  text-align: center;
}

#aboutlink {
  
  border-bottom: 1px solid #ccc;
}

#signup {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
}
</style>
