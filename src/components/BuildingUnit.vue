<script setup lang="ts"></script>

<template>
  <div class="building-unit">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.building-unit {
  width: 100%;
  aspect-ratio: 1.618;
  box-sizing: border-box;
}
</style>
