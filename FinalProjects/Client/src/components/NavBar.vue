<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
    const isMenuActive = ref(false);
    function toggleMenu() {
        isMenuActive.value = !isMenuActive.value;
        console.log({ isMenuActive });
    }
</script>

<template>
    <nav class="navbar is-danger">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">

            <RouterLink to="/" class="navbar-item"><icon class="fas fa-house-medical"></icon></RouterLink>
              
          </a>
          <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-start">

            
            <RouterLink to="/about" class="navbar-item" @click="toggleMenu">About</RouterLink>
            <RouterLink to="/myhome" class="navbar-item" @click="toggleMenu">My Home</RouterLink>
            <RouterLink to="/feed" class="navbar-item" @click="toggleMenu">Feed</RouterLink>


            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Admin
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                 <RouterLink to="/users" @click="toggleMenu"> Users</RouterLink>
                </a>

              </div>
            </div>
          </div>
      
          <div class="navbar-end">

            <LoginBadge />

            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button is-link" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                
              </div>
            </div>
          </div>
        </div>
    </div>
      </nav>
</template>


<style scoped>
.fa-house-medical {
    color:aliceblue
}

</style>