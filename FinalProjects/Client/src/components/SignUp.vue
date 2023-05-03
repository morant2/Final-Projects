<script setup lang="ts">
import { ref } from 'vue';
import { ObjectId } from 'mongodb';
import type { User } from '../Model/session';
import { addUser } from '../Model/session';

const user = ref<User | null>(null);

function newUser(){
    user.value={
    id: new ObjectId(),
    name: "",
    email: "",
    password: "",
    photo: "",
    role: "user"
    }
}



function saveUser(){

    //addUser(user.value!);
}


</script>

<template>
        <button class="button is-primary" @click="newUser()" style="width:auto;"><strong>Sign Up</strong></button>
        
        <div class="modal" :class="{active:user}">
            <span @click="user = null" class="close" title="Close Modal">&times;</span>
            <form class="modal-card" @submit.prevent="saveUser()">
                <header class="modal-card-head"></header>
                <section class="modal-card-body">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                        <input class="input" type="text" placeholder="Text input" v-bind="user?.name">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-danger" type="email" placeholder="Email input" value="hello@" v-bind="user?.email">
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
                        <label class="label">Subject</label>
                        <div class="control">
                            <div class="select">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                    </div>



                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox">
                                I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="radio">
                                <input type="radio" name="question">
                                Yes
                            </label>
                            <label class="radio">
                                <input type="radio" name="question">
                                No
                            </label>
                        </div>
                    </div>
                </section>
                    <footer class="modal-card-foot">
                        <button class="button" @click="user = null" >Cancel</button>
                        <button class="button" @click="saveUser()">Submit</button>
                    </footer>
            </form>
        </div>
</template>

<style scoped>

.modal.active {
    display: block;
}
</style>