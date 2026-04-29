<script setup lang="ts">
import { computed } from "vue";
import { useFocusedManager } from "../stores/focusedManager";

const props = withDefaults(
  defineProps<{
    needBalcony?: boolean;
    floorIdx?: number;
    title?: string;
  }>(),
  {
    needBalcony: true,
    floorIdx: 0,
  },
);
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
      <div class="floor-divider"></div>
      <div class="floor-door"></div>
      <div class="floor-window"></div>
      <div class="floor-railing">{{ props.title ?? "" }}</div>
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
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: var(--building-wall-color);
  border-left: var(--building-border);
  border-right: var(--building-border);
  opacity: 1;
  transition: opacity 0.5s ease;
  .floor-divider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background-color: #704031;
  }
  .floor-door {
    position: absolute;
    top: 20%;
    left: 5%;
    width: 30%;
    height: 75%;
    box-sizing: border-box;
    background-image:
      linear-gradient(
        90deg,
        transparent 0 calc(50% - 4px),
        var(--building-border-color) calc(50% - 4px) calc(50% + 4px),
        transparent calc(50% + 4px) 100%
      ),
      linear-gradient(135deg, transparent 0 20%, var(--glass-reflect-color) 20% 60%, transparent 60%);
    background-color: var(--glass-color);
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
    background-image:
      linear-gradient(
        90deg,
        transparent 0 calc(50% - 4px),
        var(--building-border-color) calc(50% - 4px) calc(50% + 4px),
        transparent calc(50% + 4px) 100%
      ),
      linear-gradient(
        135deg,
        transparent 0 20%,
        var(--glass-reflect-color) 20% 70%,
        transparent 70% 80%,
        var(--glass-reflect-color) 80%
      );
    background-color: var(--glass-color);
    border: var(--building-border);
    border-radius: var(--building-border-radius);
  }
}
.floor-railing {
  position: absolute;
  bottom: 0;
  left: -24px;
  right: -24px;
  height: 40%;
  box-sizing: border-box;
  background-color: var(--building-wall-color);
  border: var(--building-border);
  border-radius: var(--building-border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "SimHei", "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", "Heiti SC", sans-serif;
  font-weight: bolder;
  color: #ff9c3e;
  letter-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
