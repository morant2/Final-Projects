<script setup lang="ts">
import { ref } from 'vue';
import { useSession, useLogout, useLogin, getAllUsers } from '@/Model/session';
import SignUp from '@/components/SignUp.vue';
import type { User } from '@/Model/session';

const userList = ref<User[]>([]);
getAllUsers().then((data) => {
    userList.value = data.data;
});

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
              <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                  <button class="button is-primary" id="dropbtn" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span class="icon">
                        <i class="fas fa-user"></i>
                    </span>
                    <strong>Login</strong>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down"></i>
                    </span>
                  </button>
                </div>
                  <div class="dropdown-menu" id="users" role="menu">
                    <div class="dropdown-content">
                        <a v-for="(user, index) in userList" :key="index" class="dropdown-item" @click="useLogin()">
                            {{ user.name }}
                        </a>
                    </div>
                  </div>
              </div>
              <div class="navbar-item">
                <SignUp />
            </div>
            </div>
                
                


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
                
            
    



</template>

<style scoped>

*{
    box-sizing: border-box;
}
.button {
    color: white;
    margin: auto;
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

#users{
    background-color: #f1f1f1;
    min-width: 80px;
    overflow: auto;
    border-radius: 0 0 10px 10px;
    z-index: 1;
}

</style>