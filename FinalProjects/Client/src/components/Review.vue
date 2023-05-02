<script setup lang="ts">

</script>

<template>
<div class="reviewbox">
    
     <p class="review"> "This is kind of a review. Now, does making it bigger alter the image at all? No. Now to make the words look pretty. " ~A Satisfied User</p>
    
</div>
</template>

<style scoped>

.reviewbox
{   
    
    background-image: url("../assets/ReviewBackdrop.jpg");
    background-size: cover;
    height: 50vh;
    position: relative;
}

.review
{
    text-align: center;
    position: absolute;
    right:0;
    bottom: 0;
    width: 30%;
}
</style>