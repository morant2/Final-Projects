<script setup lang="ts">
import { workouts } from '@/data/workouts.json';
import { meals } from '@/data/meals.json';
import { useSession } from '@/Model/session';
import type { Meal } from '@/Model/meals';
import type { Workout } from '@/Model/workouts';

const mealsList = meals;
const workoutsList = workouts;
const session = useSession();

function getWorkouts(): Workout[] {
    const workouts: Workout[] = [];
    for (
        let i = 0;
        i < workoutsList.length;
        i++
    ) {
        if (workoutsList[i].user === session.user?.name) {
            workouts.push(workoutsList[i]);
        }
    }
    return workouts;
}

function getMeals(): Meal[] {
    const meals: Meal[] = [];
    for (
        let i = 0;
        i < mealsList.length;
        i++
    ) {
        if (mealsList[i].user === session.user?.name) {
            meals.push(mealsList[i]);
        }
    }
    return meals;
}

function getAll(): Object[] {
    const all: Object[] = [];
    for (
        let i = 0;
        i < mealsList.length;
        i++
    ) {
        if (mealsList[i].user === session.user?.name) {
            all.push(mealsList[i]);
        }
    }
    for (
        let i = 0;
        i < workoutsList.length;
        i++
    ) {
        if (workoutsList[i].user === session.user?.name) {
            all.push(workoutsList[i]);
        }
    }
    return all;
}

</script>

<template>

<article class="panel">
    <div class="tabs is-boxed is-fullwidth">
        <ul>
            <li class="tab" @click="getMeals">
                <a>
                    <span class="icon is-small"><i class="fas fa-bowl-food"></i></span>
                    <span>Meals</span>
                </a>
            </li>
            <li class="tab" @click="getWorkouts">
                <a>
                    <span class="icon is-small"><i class="fas fa-dumbbell"></i></span>
                    <span>Workouts</span>
                </a>
            </li>
            <li class="tab" @click="getAll">
                <a>
                    <span>All</span>
                </a>
            </li>
        </ul>
        <article class="media box">

        </article>
    </div>

    <div class="panel-block">
        <p class="control has-icons-left">

        </p>
    </div>
    <div class="panel-block">
        <p class="control has-icons-left">

        </p>
    </div>
</article>

</template>

<style scoped>

.tab {
    display: inline-block;
    margin: 0 10px;
}

.tab.click {
    background-color: #00d1b2;
    color: white;
}


</style>