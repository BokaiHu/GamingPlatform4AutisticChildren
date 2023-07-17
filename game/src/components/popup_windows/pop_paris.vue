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
        <p v-if="msg === 'paris'">This is the Eiffel Tower.</p>
        <p v-else-if="msg === 'berlin'">This is the brandenburg gate.</p>
        <p v-else-if="msg === 'rome'">This is the Colossal.</p>
        <p v-else-if="msg === 'london'">This is the Big Ben.</p>
        <p v-else-if="msg === 'cologne'">This is the Cologne Cathedral.</p>
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
  margin: 0;
  width: 50%;
  height: auto;
}

.text-container {
  padding: 0 20px;
}

.i-t {
  margin: 0;
  display: flex; /* 设置图片和文字水平排列 */
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
