<script setup lang="ts">
</script>

<template>
    <div id="loginMessage">
        <h1 class="title">
            Login
        </h1>
        <h2 class="subtitle">
            If you got here then you are not logged in. <br>
            To login just click the button on the top right corner.
        </h2>
    </div>
</template>


<style scoped>

#loginMessage {
    position: fixed;
    top: 25%;
    right: 25%;
    left: 25%;
    
    border: 4px solid red;
    border-radius: 5px; 
    padding: 10px;
    text-align: center;
}
</style>