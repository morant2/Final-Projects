<script setup lang="ts">
import NewMeal from "@/components/NewMeal.vue";
import NewWorkout from "@/components/NewWorkout.vue";
import MyPosts from "@/components/MyPosts.vue";
import { todaysActiveTime, totalActiveTime, weekActiveTime, monthActiveTime } from "@/Model/workouts";
import { totalCalories, todaysCalories, weekCalories, monthCalories } from "@/Model/meals";

</script>

<template>

    <h1 class="title">My Home View</h1>
    <div>
        <div class="column is-one-quarter" id="intake">
            <h1 class="title">Intake</h1>
            <p class="subtitle">This is the food part</p>
            <NewMeal />
            <article class="media box">
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>Calories consumed:</strong>
                            <br>
                            <h>Today's Calories: {{ todaysCalories }}</h>
                            <br>
                            <h>This Week's Calories: {{ weekCalories }}</h>
                            <br>
                            <h>This Month's Calories: {{ monthCalories }}</h>
                            <br>
                            <h>All Time Calories: {{ totalCalories }}</h>
                            <br>
                            

                        </p>
                    </div>
                </div>
            </article>
        </div>
        <div class="column is-half" id="mystuff">
            <h1 class="title">My Stuff</h1>
            <p class="subtitle">This is the stuff part</p>
            <MyPosts />
        </div>
        <div class="column is-one-quarter" id="activity">
            <h1 class="title">Activity</h1>
            <p class="subtitle">This is the moving part</p>
            <NewWorkout />
            <article class="media box">
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>Active time:</strong>
                            <br>
                            <h>Today's Active Time: {{ todaysActiveTime }} minutes</h>
                            <br>
                            <h>This Week's Active Time: {{ weekActiveTime }} minutes</h>
                            <br>
                            <h>This Month's Active Time: {{ monthActiveTime }} minutes</h>
                            <br>
                            <h>All Time Active Time: {{ totalActiveTime }} minutes</h>
                            <br>
                        </p>
                    </div>
                </div>
            </article>
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