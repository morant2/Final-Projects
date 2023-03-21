<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login, useLogout } from '@/Model/session';
import LoginBadge from '../components/LoginBadge.vue';

const session = useSession();
const logout = useLogout();

</script>

<template>
    <div class="container" id="signup">
        <p v-if="session.user"><LoginBadge />Feel free to check everything out!
        </p>
        <p v-else>Login to access your data, or sign up to start tracking!
        <LoginBadge /></p>
        
    </div>
</template>

<style scoped>
#signup 
{
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
  text-align: center;
  align-items: center;
  color:white;
  text-decoration: none;
}


</style>

