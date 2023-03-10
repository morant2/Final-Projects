<script setup lang="ts">
import LoginBadge from '../components/LoginBadge.vue';
</script>

<template>
  <div id="header">
    <h1 class="title">
      Welcome to my incredibly generic health app.
    </h1>
  </div>

  <div id="aboutlink">
    <p>Click here to find out more about us!</p>
    <RouterLink to="/about">About</RouterLink>
  </div>

  <div id="signup">
   <p>Login to access your data, or sign up to start tracking!</p>
    <LoginBadge />
  
  </div>
</template>

<style scoped>

#header {
  background-color: #f5f5f5;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  text-align: center;
}

#aboutlink {
  margin-top: 1rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

#signup {
  margin-top: 1rem;
  text-align: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;
}
</style>
