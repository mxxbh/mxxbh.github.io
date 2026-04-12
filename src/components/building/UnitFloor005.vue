<script setup lang="ts">
const handleClick = () => {
  window.open("https://mxxbh.github.io/learning-note/", "_self");
};
</script>

<template>
  <div class="building-floor floor005">
    <div class="container" @click.stop>
      <h2 class="title">Learning Note</h2>
      <p class="desc">前端学习笔记，专注前端开发技术归纳，收录常见功能实现方案和常见问题，持续更新中～</p>
      <button class="button" @click="handleClick">前往查看</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.floor005 {
  padding: 10%;
  .container {
    height: 100%;
    font-family: "Comic Sans MS", "Comic Neue", "Marker Felt", "Chalkboard SE", cursive, sans-serif;
    text-align: center;
    background: #fffcf5;
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    overflow: hidden;
    .title {
      font-size: 24px;
      font-weight: bold;
      color: #f77a2d;
      margin: 0;
      letter-spacing: 1px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
    .desc {
      font-size: 16px;
      color: #7d5a44;
      margin: 0;
      max-width: 90%;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
    .button {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background-color: #ff9c3e;
      border: 3px solid #e86f26;
      border-radius: 14px;
      padding: 10px 28px;
      cursor: pointer;
      transition: 0.2s;
      margin-top: 10px;
    }
    .button:hover {
      transform: scale(1.05);
      background: #ff8826;
    }
    .button:active {
      background: #ff8826;
    }
  }
}
</style>
