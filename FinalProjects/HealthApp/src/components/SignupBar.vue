<script setup lang="ts">
import LoginBadge from '../components/LoginBadge.vue';

</script>

<template>
    <div class="container" id="signup">
        <p>Login to access your data, or sign up to start tracking!</p>
        <LoginBadge />
    </div>
</template>

<style scoped>
#signup 
{
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
}
</style>

