<script setup lang="ts">

import { getAllUsers } from '@/Model/session';
import type { User } from '@/Model/session';
import { ref } from 'vue';

const users = ref<User[]>([]);
getAllUsers().then((data) => {
    users.value = data.data;
});

</script>

<template>
    <div class="column is-one-quarter"></div>
    <div class="column is-half">
        <table class="table is-fullwidth is-bordered">
            <thead>
                <tr>
                    <th>Users:</th>
                    <th>UserID:</th>
                    <th>Email:</th>
                    <th>Role:</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{user.name}}</td>
                    <td>{{user.id}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
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