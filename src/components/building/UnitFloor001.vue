<script setup lang="ts"></script>

<template>
  <div class="building-floor floor001">
    <div class="floor-door"></div>
  </div>
</template>

<style scoped lang="scss">
.floor001 {
  background-color: var(--building-wall-color);
  .floor-door {
    --door-color: rgb(68, 46, 31);
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
        var(--door-color) 0 calc(50% - 4px),
        var(--building-border-color) calc(50% - 4px) calc(50% + 4px),
        var(--door-color) calc(50% + 4px) 100%
      );
    border: var(--building-border);
    border-bottom: 0;
    border-radius: var(--building-border-radius) var(--building-border-radius) 0 0;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 10%;
      background-color: var(--door-color);
      border-bottom: var(--building-border);
    }
  }
}
</style>
