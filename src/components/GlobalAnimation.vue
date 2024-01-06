<script setup lang="ts"></script>

<template>
  <div>
    <div class="plant"></div>
    <div class="seed">
      <div class="light-spot"></div>
    </div>
    <div class="flowerpot">
      <div class="soil"></div>
      <div class="pot-head"></div>
      <div class="pot-body"></div>
      <div class="pot-bottom"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.seed {
  width: 10px;
  height: 16px;
  border-radius: 50% / 40%;
  background-color: rgb(59, 170, 64);
  transform: rotate(-20deg);
  margin-bottom: 20px;
  .light-spot {
    width: 3px;
    height: 5px;
    background-color: rgb(195, 238, 196);
    border-radius: 50% / 20%;
    position: absolute;
    top: 2px;
    left: 5px;
  }
}
.flowerpot {
  --pot-color: rgb(124, 66, 15);
  --soil-color: rgb(53, 21, 0);
  width: 120px;
  height: 80px;
  position: relative;
  .soil {
    width: 116px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--soil-color);
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -30%);
  }
  .pot-head {
    width: 120px;
    height: 30px;
    border-radius: 50% 50% 50% 50% / 10px 10px 50% 50%;
    background-color: var(--pot-color);
    position: absolute;
    transform: translateY(-30%);
    left: 0;
    top: 0;
  }
  .pot-body {
    height: 100%;
    background-color: var(--pot-color);
    clip-path: polygon(0 0, 20px 100%, 100px 100%, 100% 0);
  }
  .pot-bottom {
    width: 80px;
    height: 15px;
    border-radius: 0 0 50% 50% / 0 0 50% 50%;
    background-color: var(--pot-color);
    position: absolute;
    left: 50%;
    bottom: 1px;
    transform: translate(-50%, 50%);
  }
}
</style>
