<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.home-page {
  background-color: #AF8A54;
}

.start-game-page {
  background-image: url("/src/assets/cWorldMap.jpg");
  width: 100%; /* 确保元素宽度为100% */
  height: 100%; /* 确保元素高度为100% */
  position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 125vh;
}
</style>
