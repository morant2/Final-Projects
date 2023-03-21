<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login2, useLogout } from '@/Model/session';
import { usersList } from '@/data/usersList.json';
import  SignUpView  from '@/components/SignUpView.vue';

const session = useSession();
const logout = useLogout();
const signUp = SignUpView;
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
            
                    <a class="button is-primary" onclick="'signUp'.style.display='block'">
                    <span class="icon">
                        <i class="fas fa-user-plus"></i>
                    </span>
                <strong>Sign up</strong>
            </a>
            
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