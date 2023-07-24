<template>
  <div id='info'>
    <div class="container">
      <div class="text-container">{{ $t('introduction0') }}</div>
      <div class="text-container">{{ $t('introduction1') }}</div>
      <div class="text-container">{{ $t('introduction2') }}</div>
      <div class="text-container">{{ $t('introduction3') }}</div>
      <button class="button" @click="goBack">{{ $t('goBack') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0d69a6;
  border: 2px solid white;
}

.container {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
}

.text-container {
  font-size: 18px; /* 设置文字大小为18像素 */
  line-height: 1.6; /* 设置行间距为1.6倍文字大小 */
  text-align: justify; /* 实现两端对齐效果 */
  width: 100%;
  margin-bottom: 30px;
}
</style>
