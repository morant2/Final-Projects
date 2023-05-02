<script setup lang="ts">

import Feed from "@/components/Feed.vue";

</script>

<template>

  <h1 class="title is-1">All Posts</h1>

        <div class="column is-one-quarter">
        
        </div>
        <div class="column is-half">
            
            <Feed />

        </div>
        <div class="column is-one-quarter">
            
        </div>


</template>

<style scoped>
.column {
    margin: 0 auto;
    padding: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.title {
    text-align: center;
}
</style>