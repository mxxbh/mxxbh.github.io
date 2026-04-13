<script setup lang="ts">
import githubIcon from "../../../public/github.svg";

const handleClick = () => {
  window.open("https://github.com/mxxbh/mxxbh.github.io", "_self");
};

</script>

<template>
  <div class="building-floor floor002">
    <img :src="githubIcon" @click.stop="handleClick" alt="github" />
  </div>
</template>

<style scoped lang="scss">
.floor002 {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 15%;
    aspect-ratio: 1;
    object-fit: contain;
  }
}
</style>