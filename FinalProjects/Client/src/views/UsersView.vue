<script setup lang="ts">

import { getNames } from "../Model/session";
import { getUsers } from "../Model/session";

 const names= getNames();
const users= getUsers();
</script>

// Path: src\views\UsersView.vue
<template>
    <div class="column is-one-quarter"></div>
    <div class="column is-half">
        <table class="table is-fullwidth is-bordered">
            <thead>
                <tr>
                    <th>Users:</th>
                    <th>UserID:</th>
                    <th>Email:</th>
                    <th>Admin:</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.id }}</td>
                    <td>{{ user.email }}</td>
                
                    <td v-if="user.name==='John Doe'">Yes</td>
                    <td v-else>No</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="column is-one-quarter"></div>
</template>

<style scoped>

.column {
    margin-top: 10px;
    float:left;
}


</style>