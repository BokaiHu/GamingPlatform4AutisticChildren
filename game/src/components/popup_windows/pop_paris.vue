<template>
  <div class="pop-paris">
    <div class="i-t">
      <!-- 左侧图片 -->
      <div class="image-container">
        <img v-if="msg === 'paris'" src="~@/assets/puzzles/ef_tower.png" />
        <img v-else-if="msg === 'berlin'" src="~@/assets/puzzles/brandenburg_gate.jpg" />
        <img v-else-if="msg === 'rome'" src="~@/assets/puzzles/colossal.jpg" />
        <img v-else-if="msg === 'london'" src="~@/assets/puzzles/big_ben.jpg" />
        <img v-else-if="msg === 'cologne'" src="~@/assets/puzzles/cologne_cathedral.jpg" />
      </div>

      <!-- 右侧文字介绍 -->
      <div class="text-container">
        <p v-if="msg === 'paris'">{{ $t('EiffelTower') }}</p>
        <p v-else-if="msg === 'berlin'">{{ $t('BrandenBurg') }}</p>
        <p v-else-if="msg === 'rome'">{{ $t('Colossal') }}</p>
        <p v-else-if="msg === 'london'">{{ $t('BigBen') }}</p>
        <p v-else-if="msg === 'cologne'">{{ $t('CologneCathedral') }}</p>
      </div>
    </div>

    <!-- 按钮 -->
    <div class="button-container">
      <button @click="closePopup">{{ $t('goBack') }}</button>
      <button @click="navigation">{{ $t('start') }}</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps  } from 'vue';
const props = defineProps({
    msg:String,
})
const emit = defineEmits(['close', 'navigate'])
const closePopup = () => {
    emit('close')
}
const navigation = () => {
    emit('navigate', 'paris')
}
</script>
  
<style>
.pop-window {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* 设置按钮垂直排列 */
  background-color: #8a2be2; /* 修改背景色为紫色 */
  position: relative; /* 添加position属性 */
  z-index: 999; /* 设置较高的z-index值 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%; /* 添加宽度 */
  height: auto; /* 添加高度 */
}
  
.image-container {
  margin: 0;
  flex: 1;
}

.image-container img {
  width: 100%;
  height: auto;
}

.text-container {
  flex: 1; /* 文字占满剩余空间 */
  padding: 0 20px;
  font-size: 18px; /* 设置文字大小为18像素 */
  line-height: 1.6; /* 设置行间距为1.6倍文字大小 */
  text-align: justify; /* 实现两端对齐效果 */
}

.i-t {
  margin: 0;
  display: flex; /* 设置图片和文字水平排列 */
  flex-wrap: wrap; /* 自动换行 */
  color: #fff;
}

.button-container {
  display: flex;
  flex-direction: row; /* 设置按钮水平排列 */
  align-items: center; /* 居中对齐按钮 */
  margin-top: 20px;
}

.button-container button {
  margin: 10px; /* 调整按钮之间的间距 */
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
