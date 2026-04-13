<script setup lang="ts"></script>
<template>
  <div class="building-roof"></div>
</template>

<style scoped lang="scss">
.building-roof {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-left: var(--building-border);
  border-right: var(--building-border);
  border-color: transparent;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 30%;
    height: 30%;
    background-color: var(--building-wall-color);
    border: var(--building-border);
    border-radius: var(--building-border-radius);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -24px;
    right: -24px;
    height: 15%;
    background-color: var(--building-wall-color);
    border: var(--building-border);
    border-radius: var(--building-border-radius);
  }
}
</style>
