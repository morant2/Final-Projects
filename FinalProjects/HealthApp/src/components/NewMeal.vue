<script setup lang="ts">
import { addMeal, type Meal } from '@/Model/meals';
import { useSession } from '@/Model/session';
import { ref } from 'vue'

const session = useSession();


const meal = ref<Meal | null>(null);

function newMeal(){
    meal.value = {
        type: "",
        description: "",
        calories: 0,
        date: "",
        user: session.user!.name
    }
}

function saveMeal(){
    if(meal.value){
        addMeal(meal.value);
        meal.value = null;
    }
}

</script>

<template>

<div class="button" @click="newMeal()" style="width:auto;">Add Meal</div>

<div class="modal" id="MealForm" :class="{active:meal}">
    <span @click="meal = null" class="close" title="Close Modal">&times;</span>
    <form class="modal-content" @submit.prevent="saveMeal()" >
        <div class="container">
            <h1>New Meal</h1>
            <p>So what have you eaten and when?</p>
            <hr>
            <label for="type"><b>Type of consumption :</b></label><br>
                <input type="radio" id="breakfast" name="type" value="breakfast" v-bind="meal?.type">
                <label for="meal">Breakfast</label><br>
                <input type="radio" id="lunch" name="type" value="lunch" v-bind="meal?.type">
                <label for="lunch">Lunch</label><br>
                <input type="radio" id="dinner" name="type" value="dinner" v-bind="meal?.type">
                <label for="dinner">Dinner</label><br>
                <input type="radio" id="snack" name="type" value="snack" v-bind="meal?.type">
                <label for="snack">Snack</label><br>
                <input type="radio" id="drink" name="type" value="drink" v-bind="meal?.type">
                <label for="drink">Drink</label><br>

            <label for="desc"><b>Description</b></label>
            <input type="text" placeholder="Enter Description" name="desc" v-bind="meal?.description"><br>

            <label for="cal"><b>Calories</b></label>
            <input type="number" placeholder="Enter Calories" name="cal" v-bind="meal?.calories"><br>

            <label for="date"><b>Date</b></label>
            <input type="date" placeholder="Enter Date" name="date" v-bind="meal?.date">
            <label for="time"><b>Time</b></label>
            <input type="time" placeholder="Enter Time" name="time"><br>

            

            <div class="clearfix">
                <button type="button" @click="meal=null" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Submit</button>
            </div>
        </div>
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