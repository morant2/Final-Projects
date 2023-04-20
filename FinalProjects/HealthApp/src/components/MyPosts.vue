<script setup lang="ts">
import { useSession } from '@/Model/session';
import { getMealsbyUser } from '@/Model/meals';
import { getWorkoutsbyUser } from '@/Model/workouts';
import { computed, ref } from 'vue';

const mealsList = getMealsbyUser();
const workoutsList = getWorkoutsbyUser();


const activeTab = ref('all')
function changeTab(tabName: string) {
    activeTab.value = tabName
}
//sort postsToShow by date
const postsToShow = computed(() => {
    let allPosts = [...mealsList, ...workoutsList];

if(activeTab.value === 'meals') {
    allPosts = mealsList
} else if (activeTab.value === 'workouts') {
    allPosts = workoutsList
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
                   <!-- <p v-if="post instanceof Meal">{{ post.calories }}</p>
                    <p v-if="post instanceof workouts">{{ post.activeTime }}</p>
                   --></div>

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