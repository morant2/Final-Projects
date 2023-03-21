<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login2, useLogout } from '@/Model/session';
import { RouterLink } from 'vue-router';
import { usersList } from '@/data/usersList.json';

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
                <a class="button is-primary is-dropdown" id="dropbtn">
                    <span class="icon">
                        <i class="fas fa-user"></i>
                    </span>
                    <strong>Login</strong>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down"></i>
                    </span>
                    <div class="dropdown-content" id="users">
                        <a v-for="user in usersList" class="dropdown-item" @click="login2(user.name)">
                            {{ user.name }}
                        </a>
                    </div>
                    
                </a>
                <RouterLink to="/signup">
                    <a class="button is-primary">
                    <span class="icon">
                        <i class="fas fa-user-plus"></i>
                    </span>
                <strong>Sign up</strong>
            </a>
            </RouterLink>
            </div>



</template>

<style scoped>

.button {
    color: white;
}
.dropdown-content
{
    display:none;
}

#dropbtn
{
    display:inline-block;
    position:static;
}
#dropbtn:hover .dropdown-content
{
    display:flex;
    flex-direction: column;
    position: relative;

}
</style>