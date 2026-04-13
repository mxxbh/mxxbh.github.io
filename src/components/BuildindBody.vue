<script setup lang="ts">
import UnitFloor001 from "./building/UnitFloor001.vue";
import UnitFloor002 from "./building/UnitFloor002.vue";
import UnitFloor003 from "./building/UnitFloor003.vue";
import UnitFloor004 from "./building/UnitFloor004.vue";
import UnitFloor005 from "./building/UnitFloor005.vue";
import UnitRoof from "./building/UnitRoof.vue";
import BuildingUnit from "./BuildingUnit.vue";
import { useFocusedManager } from "../stores/focusedManager";

const floorList = [UnitFloor005, UnitFloor004, UnitFloor003, UnitFloor002];
const focusedManager = useFocusedManager();
</script>

<template>
  <div class="building-body" :class="{ 'is-focused': focusedManager.focusedIdx !== 0 }">
    <div class="building-roof-space"></div>
    <BuildingUnit :need-balcony="false"><UnitRoof /></BuildingUnit>
    <BuildingUnit v-for="idx in floorList.length" :floor-idx="idx">
      <component :is="floorList[idx - 1]" />
    </BuildingUnit>
    <BuildingUnit :need-balcony="false"><UnitFloor001 /></BuildingUnit>
    <div class="building-foundation"></div>
  </div>
</template>

<style scoped lang="scss">
.building-body {
  position: relative;
  z-index: 1;
  width: 40%;
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  transition: width 0.5s ease;
  &.is-focused {
    width: 95%;
  }
}
.building-roof-space {
  flex: 1;
}
.building-foundation {
  margin: 0 -32px;
  aspect-ratio: 12;
  box-sizing: border-box;
  background-color: rgb(156, 122, 110);
  border: var(--building-border);
  border-radius: 10px 10px 0 0;
}
</style>
