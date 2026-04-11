<script setup lang="ts"></script>
<template>
  <div class="building-roof"></div>
</template>

<style scoped lang="scss">
.building-roof {
  position: relative;
  width: 100%;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 30%;
    height: 30%;
    background-color: #69493d;
    border: 8px solid #000;
    border-radius: 10px;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -5%;
    right: -5%;
    height: 15%;
    background-color: #69493d;
    border: 8px solid #000;
    border-radius: 10px;
  }
}
</style>
