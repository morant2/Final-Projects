<script setup lang="ts">
import { useSession } from '@/Model/session';
import { getMeals, type Meal } from '@/Model/meals';
import { getWorkouts, type Workout } from '@/Model/workouts';
import { getAllUsers, getUser } from '@/Model/session';
import { computed, ref } from 'vue';

const { user } = useSession();


const meals = ref<Meal[]>([]);
const workouts = ref<Workout[]>([]);
//combine both lists
const allPosts = ref<any[]>([]);
getMeals().then((data) => {
    meals.value = data.data;
    allPosts.value = [...meals.value, ...workouts.value];
});

getWorkouts().then((data) => {
    workouts.value = data.data;
    allPosts.value = [...meals.value, ...workouts.value];
});



const activeTab = ref('all')
function changeTab(tabName: string) {
    activeTab.value = tabName
}
//sort postsToShow by date
const postsToShow = computed(() => {
    let allPosts = [...meals.value, ...workouts.value];
    allPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    
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
                    <img :src="user?.photo" alt="post image" />
                </div>
                <div class="column is-three-quarters">
                    <h1>{{ post.user }}</h1>
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

article{
    margin: 0 auto;
    padding: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.panel-heading {
    text-align: center;
    width:100%;
}

.panel{
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.columns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}

</style>