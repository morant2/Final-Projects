<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login, useLogout } from '@/Model/session';
import { RouterLink } from 'vue-router';

const session = useSession();
const logout = useLogout();

function logout2() {
    logout();
}

</script>

<template>
            <div class="navbar-item" v-if="session.user">
                Welcome, {{ session.user.name }}
                (<a @click="logout2()">logout</a>)
            </div>
            <div class="navbar-item" v-else>
                <a class="button is-primary" @click="login">
                    <span class="icon">
                        <i class="fas fa-user"></i>
                    </span>
                    <strong>Login</strong>
                </a>
                <a class="button is-primary">
                    <span class="icon">
                        <i class="fas fa-user-plus"></i>
                    </span>
                <RouterLink to="/signup"><strong>Sign up</strong></RouterLink>
                </a>
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
}

strong
{
    color:white;
}
</style>