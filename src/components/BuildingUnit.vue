<script setup lang="ts">
import { computed } from "vue";
import { useFocusedManager } from "../stores/focusedManager";

const props = withDefaults(defineProps<{ needBalcony?: boolean; floorIdx?: number }>(), {
  needBalcony: true,
  floorIdx: 0,
});
const focusManager = useFocusedManager();

const handleClick = (e: MouseEvent) => {
  const oldIdx = focusManager.focusedIdx;
  const newIdx = props.floorIdx && props.floorIdx !== oldIdx ? props.floorIdx : 0;
  const floorElement = e.target as HTMLDivElement;
  if (floorElement) {
    setTimeout(
      () => {
        floorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      },
      oldIdx && newIdx ? 0 : 300, // 原先未聚焦切换到聚焦状态时有过渡动画，需要等待一小段时间再执行滚动
    );
  }
  focusManager.setFocusedIdx(newIdx);
};

const isFocused = computed(() => {
  return props.floorIdx && focusManager.focusedIdx === props.floorIdx;
});
</script>

<template>
  <div class="building-unit" @click="handleClick" :class="{ 'is-focused': isFocused }">
    <div v-if="props.needBalcony" class="unit-balcony">
      <div class="floor-door"></div>
      <div class="floor-window"></div>
      <div class="floor-railing"></div>
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.building-unit {
  width: 100%;
  aspect-ratio: 1.618;
  box-sizing: border-box;
  position: relative;
  &.is-focused {
    .unit-balcony {
      opacity: 0;
      pointer-events: none;
    }
  }
}
.unit-balcony {
  --glass-color: rgba(255, 255, 255, 0.15);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background:
    linear-gradient(0, var(--building-wall-color)) no-repeat 100% 100% / 50% calc(45% + 6px),
    linear-gradient(180deg, var(--building-wall-color) 0 calc(20% + 6px), transparent calc(20% + 6px) 100%),
    linear-gradient(
      90deg,
      var(--building-wall-color) 0 calc(5% + 6px),
      transparent calc(5% + 6px) calc(35% - 6px),
      var(--building-wall-color) calc(35% - 6px) calc(55% + 6px),
      transparent calc(55% + 6px) calc(95% - 6px),
      var(--building-wall-color) calc(95% - 6px)
    );
  border-left: var(--building-border);
  border-right: var(--building-border);
  display: flex;
  justify-content: space-between;
  opacity: 1;
  transition: opacity 0.5s ease;
  .floor-door {
    position: absolute;
    top: 20%;
    left: 5%;
    width: 30%;
    height: 75%;
    box-sizing: border-box;
    background-image: linear-gradient(
      90deg,
      var(--glass-color) 0 calc(50% - 4px),
      var(--building-border-color) calc(50% - 4px) calc(50% + 4px),
      var(--glass-color) calc(50% + 4px) 100%
    );
    border: var(--building-border);
    border-radius: var(--building-border-radius);
  }
  .floor-window {
    position: absolute;
    top: 20%;
    right: 5%;
    width: 40%;
    height: 35%;
    box-sizing: border-box;
    background-image: linear-gradient(
      90deg,
      var(--glass-color) 0 calc(50% - 4px),
      var(--building-border-color) calc(50% - 4px) calc(50% + 4px),
      var(--glass-color) calc(50% + 4px) 100%
    );
    border: var(--building-border);
    border-radius: var(--building-border-radius);
  }
}
.floor-railing {
  position: absolute;
  bottom: 0;
  left: -8%;
  right: -8%;
  height: 40%;
  box-sizing: border-box;
  background-color: var(--building-wall-color);
  border: var(--building-border);
  border-radius: var(--building-border-radius);
}
</style>
