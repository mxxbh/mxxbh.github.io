<script setup lang="ts"></script>

<template>
  <div class="building-floor floor001">
    <div class="floor-divider"></div>
    <div class="floor-door"></div>
  </div>
</template>

<style scoped lang="scss">
.floor001 {
  background-color: var(--building-wall-color);
  .floor-divider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background-color: #704031;
  }
  .floor-door {
    --door-color: rgb(208 165 136);
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 50%;
    height: 70%;
    transform: translateX(-50%);
    box-sizing: border-box;
    background:
      linear-gradient(
          90deg,
          transparent 0 35%,
          var(--building-border-color) 35% calc(35% + var(--building-border-width)),
          transparent calc(35% + var(--building-border-width)) calc(65% - var(--building-border-width)),
          var(--building-border-color) calc(65% - var(--building-border-width)) 65%,
          transparent 65%
        )
        no-repeat 0 50% / 100% 25%,
      linear-gradient(
        90deg,
        transparent 0 calc(50% - 4px),
        var(--building-border-color) calc(50% - 4px) calc(50% + 4px),
        transparent calc(50% + 4px) 100%
      ),
      linear-gradient(
        135deg,
        transparent 0 20%,
        var(--glass-reflect-color) 20% 60%,
        transparent 60% 80%,
        var(--glass-reflect-color) 80% 90%,
        transparent 90%
      );
    background-color: var(--glass-color);
    border: var(--building-border);
    border-bottom: 0;
    border-radius: var(--building-border-radius) var(--building-border-radius) 0 0;
    overflow: visible;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 140%;
      height: 25%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      background-color: var(--building-wall-color);
      border: var(--building-border);
    }
  }
}
</style>
