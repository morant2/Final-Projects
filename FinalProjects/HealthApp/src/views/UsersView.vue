<script setup lang="ts">
import users from "../data/usersList.json";

</script>

// Path: src\views\UsersView.vue
<template>
    <div>
        <h1>Users</h1>
        <ul>
        <li v-for="name in users">
            {{ name }}
        </li>
        </ul>
    </div>
</template>