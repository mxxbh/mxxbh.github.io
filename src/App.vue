<script setup lang="ts">
import GlobalAnimation from './components/GlobalAnimation.vue';
import DividerText from './components/DividerText.vue';
</script>

<template>
  <div class="app-container">
    <a href="/pages/learning-note/index.html">笔记</a>
    <DividerText class="divider-text" />
    <div class="content">
      <GlobalAnimation />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: auto;
  .divider-text {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 10px;
  }
  .content {
    height: 300vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

