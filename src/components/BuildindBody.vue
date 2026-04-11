<script setup lang="ts">
import UnitFloor001 from "./building/UnitFloor001.vue";
import UnitFloor002 from "./building/UnitFloor002.vue";
import UnitRoof from "./building/UnitRoof.vue";
import BuildingUnit from "./BuildingUnit.vue";
</script>

<template>
  <div class="building-body">
    <div class="building-roof-space"></div>
    <BuildingUnit><UnitRoof /></BuildingUnit>
    <BuildingUnit><UnitFloor002 /></BuildingUnit>
    <BuildingUnit><UnitFloor002 /></BuildingUnit>
    <BuildingUnit><UnitFloor001 /></BuildingUnit>
    <div class="building-foundation"></div>
  </div>
</template>

<style scoped lang="scss">
.building-body {
  position: relative;
  z-index: 1;
  width: 40%;
  min-width: 200px;
  max-width: 400px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.building-roof-space {
  flex: 1;
}
.building-foundation {
  margin: 0 -8%;
  aspect-ratio: 12;
  box-sizing: border-box;
  background-color: rgb(156, 122, 110);
  border: 8px solid #000;
  border-radius: 10px 10px 0 0;
}
</style>
