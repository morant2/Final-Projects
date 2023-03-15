<script setup lang="ts">

import Welcome from '../components/Welcome.vue';
import SignupBar from '../components/SignupBar.vue';
</script>

<template>

  <Welcome />
  <SignupBar />

</template>

<style scoped>
.container {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
