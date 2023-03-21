<script setup lang="ts">
import { ref } from 'vue'
//import { createUser } from '@/Model/session';

const newUser = ref({
  name: '',
  email: '',
  photo: '',
  token: '',
});
</script>

<template>

  <form action="" class="box">
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
      
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <RouterLink to="/" class="button is-link is-light" >Cancel</RouterLink>
        </div>
      </div>
</form>>
    

</template>

<style scoped>


</style>