<script setup lang="ts">
import { ref } from 'vue';
import { useSession } from '@/Model/session';
import LoginBadge from '../components/LoginBadge.vue';

const session = useSession();

</script>

<template>

  <div class="container" id="signup" v-if="session.user">
        Feel free to check everything out!
      
  </div>
  <div class="container" id="signup" v-else>
        <p>Login to access your data, or sign up to start tracking!</p>
        <LoginBadge />
  </div>

</template>

<style scoped>

#signup 
{
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
  text-align: center;
  align-items: center;
  color:white;
  text-decoration: none;
}


</style>

