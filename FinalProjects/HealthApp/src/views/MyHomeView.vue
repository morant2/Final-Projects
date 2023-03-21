<script setup lang="ts">
import NewMeal from "@/components/NewMeal.vue";
import NewWorkout from "@/components/NewWorkout.vue";
import Tracker from "@/components/Tracker.vue";
</script>

<template>

    <h1 class="title">My Home View</h1>
    <div>
        <div class="column is-one-quarter" id="intake">
            <h1 class="title">Intake</h1>
            <p class="subtitle">This is the food part</p>
            <NewMeal />
        </div>
        <div class="column is-half" id="mystuff">
            <h1 class="title">My Stuff</h1>
            <p class="subtitle">This is the stuff part</p>
            <Tracker />
        </div>
        <div class="column is-one-quarter" id="activity">
            <h1 class="title">Activity</h1>
            <p class="subtitle">This is the moving part</p>
            <NewWorkout />
        </div>
    </div>
  </template>

<style scoped>

*
{
    box-sizing: border-box;
    text-align: center;
}
h1 
{
    border-bottom: 1px solid #ccc;
    background-color: aliceblue;
    display: block;
}

.column
{
    float: left;
    width: 50%;
    padding:0;
    border: 1px solid #ccc;
}

</style>