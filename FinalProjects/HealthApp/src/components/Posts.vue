<script setup lang="ts">
import { workouts } from '@/data/workouts.json';

const workoutsList = workouts;


</script>

<template>

<article class="panel">
    <div class="tabs is-boxed is-fullwidth">
        <ul>
            <li class="tab">
                <a>
                    <span class="icon is-small"><i class="fas fa-bowl-food"></i></span>
                    <span>Meals</span>
                </a>
            </li>
            <li class="tab">
                <a>
                    <span class="icon is-small"><i class="fas fa-dumbbell"></i></span>
                    <span>Workouts</span>
                </a>
            </li>
            <li class="tab is-active">
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