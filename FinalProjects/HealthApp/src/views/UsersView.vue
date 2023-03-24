<script setup lang="ts">

import { getNames } from "../Model/session";

 const names= getNames();

</script>

// Path: src\views\UsersView.vue
<template>
    <div>
        <h1>Users:</h1>
        <ul>
        <li v-for="name in names">
            {{ name }}
        </li>
        </ul>
    </div>
</template>