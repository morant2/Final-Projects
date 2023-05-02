<script setup lang="ts">
import { useSession } from '@/Model/session';
import { getMeals, type Meal } from '@/Model/meals';
import { getWorkouts, type Workout } from '@/Model/workouts';
import { computed, ref } from 'vue';

const mealsList = ref<Meal[]>([]);
getMeals().then((data) => {
    mealsList.value = data.data;
});
const workoutsList = ref<Workout[]>([]);
getWorkouts().then((data) => {
    workoutsList.value = data.data;
});


const activeTab = ref('all')
function changeTab(tabName: string) {
    activeTab.value = tabName
}
//sort postsToShow by date

const postsToShow = computed(() => {
    let allPosts = [...mealsList.value, ...workoutsList.value];

if(activeTab.value === 'meals') {
    allPosts = mealsList.value;
} else if (activeTab.value === 'workouts') {
    allPosts = workoutsList.value;
} else if (activeTab.value === 'all') {
    allPosts = [...mealsList.value, ...workoutsList.value];
}

allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
})

return allPosts;
});

</script>

<template>

<article class="panel">
    <p class="panel-heading">
        My Posts
    </p>
    <p class="panel-tabs">
        <a :class="{ 'is-active': activeTab==='meals'}" @click="changeTab('meals')">Meals</a>
        <a :class="{ 'is-active': activeTab==='workouts'}" @click="changeTab('workouts')">Workouts</a>
        <a :class="{ 'is-active': activeTab==='all'}" @click="changeTab('all')">All</a>
    </p>
    <ul>
        <li v-for="(post, index) in postsToShow" :key="index">
            <div class="columns">
                <div class="column is-one-quarter">
                    <!--<img :src="post.image" alt="post image" />-->
                </div>
                <div class="column is-three-quarters">
                    <h1>{{ post.type }}</h1>
                    <p>{{ post.description }}</p>
                    <p>{{ post.date }}</p>
                </div>

            </div>
        </li>
    </ul>
    

</article>

</template>

<style scoped>

.columns {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}


</style>