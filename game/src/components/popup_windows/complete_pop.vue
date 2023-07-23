<template>
    <div class="pop-paris">
      <div class="i-t">
        <!-- 左侧图片 -->
        <div class="image-container">
          <img v-if="msg === 'paris'" src="~@/assets/intros/baguette.png" />
          <img v-else-if="msg === 'berlin'" src="~@/assets/puzzles/brandenburg_gate.jpg" />
          <img v-else-if="msg === 'rome'" src="~@/assets/puzzles/colossal.jpg" />
          <img v-else-if="msg === 'london'" src="~@/assets/puzzles/big_ben.jpg" />
          <img v-else-if="msg === 'cologne'" src="~@/assets/puzzles/cologne_cathedral.jpg" />
        </div>
        <!-- 右侧文字介绍 -->
        <div class="text-container">
          <p v-if="msg === 'paris'">
            {{ $t('FrenchCuisine') }}
            <br>
            <a href="https://www.youtube.com/watch?v=qgewyDj3ZnA" target="_blank">{{ $t('FrenchCuisineLink') }}</a>
          </p>
          <p v-else-if="msg === 'berlin'">
            {{ $t('BrandenBurg') }}
            <br>
            <a href="https://www.youtube.com/watch?v=vvIacr85Sjo" target="_blank">{{ $t('berlinIntro') }}</a>
            <br>
            <audio :src="iBerlin" controls="true" autoplay="true"></audio>
          </p>
          <p v-else-if="msg === 'rome'">
            {{ $t('Colossal') }}
            <br>
            <a href="https://www.youtube.com/watch?v=U6oPfmJcU8s" target="_blank">{{ $t('romeIntro') }}</a>
            <br>
            <audio :src="iRome" controls="true" autoplay="true"></audio>
          </p>
          <p v-else-if="msg === 'london'">
            {{ $t('BigBen') }}
            <br>
            <a href="https://www.youtube.com/watch?v=tpYwWK7Xgvc" target="_blank">{{ $t('londonIntro') }}</a>
            <br>
            <audio :src="iLondon" controls="true" autoplay="true"></audio>
          </p>
          <p v-else-if="msg === 'cologne'">
            {{ $t('CologneCathedral') }}
            <br>
            <a href="https://www.youtube.com/watch?v=rzQZuQBm074" target="_blank">{{ $t('cologneIntro') }}</a>
            <br>
            <audio :src="iCologne" controls="true" autoplay="true"></audio>
          </p>
        </div>
        
      </div>
      <div class="i-t">
        <!-- 左侧图片 -->
        <div class="image-container">
          <img v-if="msg === 'paris'" src="~@/assets/intros/bugatti.jpg" />
          <img v-else-if="msg === 'berlin'" src="~@/assets/puzzles/brandenburg_gate.jpg" />
          <img v-else-if="msg === 'rome'" src="~@/assets/puzzles/colossal.jpg" />
          <img v-else-if="msg === 'london'" src="~@/assets/puzzles/big_ben.jpg" />
          <img v-else-if="msg === 'cologne'" src="~@/assets/puzzles/cologne_cathedral.jpg" />
        </div>
        <!-- 右侧文字介绍 -->
        <div class="text-container">
          <p v-if="msg === 'paris'">
            {{ $t('FrenchCars') }}
            <br>
            <a href="https://www.youtube.com/watch?v=qgewyDj3ZnA" target="_blank">{{ $t('FrenchCarsLink') }}</a>
          </p>
          <p v-else-if="msg === 'berlin'">
            {{ $t('BrandenBurg') }}
            <br>
            <a href="https://www.youtube.com/watch?v=vvIacr85Sjo" target="_blank">{{ $t('berlinIntro') }}</a>
            <br>
            <audio :src="iBerlin" controls="true" autoplay="true"></audio>
          </p>
          <p v-else-if="msg === 'rome'">
            {{ $t('Colossal') }}
            <br>
            <a href="https://www.youtube.com/watch?v=U6oPfmJcU8s" target="_blank">{{ $t('romeIntro') }}</a>
            <br>
            <audio :src="iRome" controls="true" autoplay="true"></audio>
          </p>
          <p v-else-if="msg === 'london'">
            {{ $t('BigBen') }}
            <br>
            <a href="https://www.youtube.com/watch?v=tpYwWK7Xgvc" target="_blank">{{ $t('londonIntro') }}</a>
            <br>
            <audio :src="iLondon" controls="true" autoplay="true"></audio>
          </p>
          <p v-else-if="msg === 'cologne'">
            {{ $t('CologneCathedral') }}
            <br>
            <a href="https://www.youtube.com/watch?v=rzQZuQBm074" target="_blank">{{ $t('cologneIntro') }}</a>
            <br>
            <audio :src="iCologne" controls="true" autoplay="true"></audio>
          </p>
        </div>
        
      </div>
      <!-- 按钮 -->
      <div class="button-container">
        <button @click="closePopup">{{ $t('close') }}</button>
        <button @click="navigation">{{ $t('ReturnToMainStages') }}</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineEmits, defineProps  } from 'vue';
  import iParis from '@/assets/intro_audios/EiffelTower.mp3';
  import iBerlin from '@/assets/intro_audios/BrandenburgGate.mp3';
  import iRome from '@/assets/intro_audios/Colosseum.mp3';
  import iLondon from '@/assets/intro_audios/BigBen.mp3';
  import iCologne from '@/assets/intro_audios/CologneCathedral.mp3';
  const props = defineProps({
      msg:String,
  })
  const emit = defineEmits(['close', 'navigate'])
  const closePopup = () => {
      emit('close')
  }
  const navigation = () => {
      emit('navigate')
  }
  </script>
    
  <style>
  .pop-window {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; /* 设置按钮垂直排列 */
    background-color: #c5a3e6; /* 修改背景色为紫色 */
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
    width: 80%;
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
    color: #000000;
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
  