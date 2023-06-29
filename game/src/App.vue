<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
/* CSS 样式可以根据需要进行自定义 */
body {
  height: 100%;
  background-color: #AF8A54;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 125vh;
}
</style>
