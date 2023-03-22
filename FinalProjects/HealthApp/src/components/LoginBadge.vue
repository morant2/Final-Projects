<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login2, useLogout } from '@/Model/session';
import { users } from '@/data/usersList.json';


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
                        <a v-for="user in users" class="dropdown-item" @click="login2(user.name)">
                            {{ user.name }}
                        </a>
                    </div>
                    
                </a>
                
<div class="button is-primary" onclick="document.getElementById('SignupForm').style.display='block'" style="width:auto;"><strong>Sign Up</strong></div>

<div class="modal" id="SignupForm">
    <span onclick="'SignupForm'.style.display='none'" class="close" title="Close Modal">&times;</span>
    <form class="modal-content" action="">
        <div class="container">
            <h1>Sign Up</h1>
            <hr>
            <div class="field">
        <label class="label">Name</label>
        <div class="control has-icons-left">
          <input class="input" type="text" id="name" placeholder="Jim Henson">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
      </div>
    </div>
      
    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" id="email" placeholder="Email input" value="hello@">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>
      
      <div class="field">
        <label class="label">Profile Picture</label>
        <div class="control">
          <form action="/action_page.php">
            <input type="file" id="photo" name="filename">
          </form>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox">
            I am ready to sign up.
          </label>
        </div>
      </div>
            <div class="clearfix">
                <button type="button" onclick="document.getElementById('SignupForm').style.display='none'" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Submit</button>
            </div>
        </div>
    </form>
</div>
                
            
            </div>



</template>

<style scoped>

*{
    box-sizing: border-box;
}
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

.modal {
    display:none;
    position:fixed;
    z-index:1;  
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color:rgb(0,0,0,0.4);
    padding-top:50px;
    
}


.modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto;
    border: 1px solid #888;
    border-radius: 10px;
    width: 80%;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

}

h1 {
    text-align: center;
    font-weight: bold;
    font-size: larger;
}

</style>