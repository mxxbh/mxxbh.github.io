<script setup lang="ts">
import BuildingBackground from "./components/BuildingBackground.vue";
import BuildindBody from "./components/BuildindBody.vue";
</script>

<template>
  <div class="app-container">
    <BuildingBackground />
    <BuildindBody />
  </div>
</template>

<style scoped lang="scss">
.app-container {
  position: relative;
  min-height: 100vh;
}
</style>
