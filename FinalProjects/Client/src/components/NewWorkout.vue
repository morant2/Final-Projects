<script setup lang="ts">
import { addWorkout, type Workout } from '@/Model/workouts';
import { useSession } from '@/Model/session';
import { ref } from 'vue'

const session = useSession();

const workout = ref<Workout | null>(null);

function newWorkout(){
    workout.value = {
        type: "",
        description: "",
        date: "",
        activeTime: 0,
        user: session.user!.name
    }
}

function saveWorkout(){
    if(workout.value){
        addWorkout(workout.value);
        workout.value = null;
    }
}
</script>

<template>

<div class="button" @click="newWorkout()" style="width:auto;">Add Exercise</div>

<div class="modal" id="WorkoutForm" :class="{active:workout}">
    <span @click="workout=null" class="close" title="Close Modal">&times;</span>
    <form class="modal-card" @submit.prevent="saveWorkout()">
        <header class="modal-card-head">
            <p class="modal-card-title">New Workout</p>
            <button class="delete" aria-label="close" @click="workout = null"></button>
        </header>
        <section class="modal-card-body">
            <p>So what have you done today?</p>
            <hr>
            <label for="type"><b>Type of activity :</b></label><br>
                <select id="type" name="type">
                    <option value="cardio" v-bind="workout?.type">Cardio</option>
                    <option value="strength" v-bind="workout?.type">Strength</option>
                    <option value="flexibility" v-bind="workout?.type">Flexibility</option>
                </select><br>

            <label for="desc"><b>Description</b></label>
            <input type="text" placeholder="Enter Description" name="desc" v-bind="workout?.description"><br>

            <label for="date"><b>Date</b></label>
            <input type="date" placeholder="Enter Date" name="date" v-bind="workout?.date"><br>

            <label for="time"><b>Active Time</b></label>
            <input type="number" placeholder="Enter Active Time" name="time" v-bind="workout?.activeTime"><br>
            
        </section>

        <footer class="modal-card-foot">
            <button class="button" @click="workout = null">Cancel</button>
            <button class="button" @click="saveWorkout()">Save</button>
        </footer>
    </form>
</div>
</template>

<style scoped>

* {
  box-sizing: border-box;
}
.button
{
    background-color: #00d1b2;
    border-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    
    transition: all 0.3s ease-in-out;
    
}

.modal {
  display: none;
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color:rgb(0,0,0,0.4);
  padding-top: 50px;
}

.modal.active
{
    display: block;
}
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; 
  border: 1px solid #888;
  width: 80%; 
}

.container
{
    padding: 16px;
}

input[type=text]
{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
</style>