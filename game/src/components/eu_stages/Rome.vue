<template>
  <div class="content">
    <button class="back-button" @click="goBack">
      <span v-html="'&#8592;'"></span>
    </button>
    <div class="main-container">
      <div class="imgbox">
      <div class="background">
        <div
          class="image_rome"
          :style="{ left: left(item) + 'px', top: top(item) + 'px', backgroundPosition: posi(index) }"
          v-for="(index, item) in imgList.list"
          :data-index="index"
          @pointerdown="mousedown(index)"
          @pointermove="mousemove(index, $event)"
          @pointerup="mouseup(index, $event)">
        </div>
      </div>
      </div>
      <div class="operate">
      <div>{{ setTime(timer.m) }}:{{ setTime(timer.s) }}:{{ setTime(timer.ms) }}</div>
      <div>
        <button class="btn" @click="breakUp()" :disabled="isStarted">{{ $t('shuffle') }}</button>
        <button class="btn" @click="hint()">{{ $t('hint') }}</button>
        <button class="btn" @click="startGame()" :disabled="isStarted">{{ $t('start') }}</button>
        <button class="btn" @click="pause()">{{ $t('pause') }}</button>
        <button class="btn" @click="resume()">{{ $t('resume') }}</button>
        <button class="btn" @click="restart()">{{ $t('restart') }}</button>
      </div>
      <div class="hint">
        <img
          src="\src\assets\puzzles\colossal.jpg"
          :style="{ display: display.value, width: '200px', height: '200px' }"
        />
      </div>
      </div>
    </div>
    <transition>
      <div class="popup-window" v-if="isPuzzleComplete & !HideNotShow">
        <h3>Puzzle Complete!</h3>
        <button class="btn" @click="HideNotShow = true">{{ $t("ToRome") }}</button>
      </div>
    </transition>
    <transition>
      <div class="popup-window" v-if="isPuzzleComplete & HideNotShow">
        <Complete msg="paris" @close="isPuzzleComplete=false, HideNotShow=false" @navigate="navigateTo('EU')"></Complete>
      </div>
    </transition>
    <audio :src="bgmSrc" autoplay controls @ended="audioFinished"></audio>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import LaCam from '@/assets/bgms/LaCam.mp3';
import pgnn from '@/assets/bgms/pgnn.mp3';
import Paganini from '@/assets/bgms/Paganini.mp3';
const router = useRouter();
const isPuzzleComplete = ref(false);
const canMovePuzzle = ref(false);

// BGM control
const bgmId = ref(0);
const bgmList = [
(LaCam),
(pgnn),
(Paganini),
];
const bgmSrc = ref(bgmList[bgmId.value]);
function audioFinished() {
console.log('over');
if (bgmId.value < bgmList.length - 1) {
  bgmId.value++;
} else {
  bgmId.value = 0;
}
bgmSrc.value = bgmList[bgmId.value];
}

function goBack() {
  router.go(-1); // 返回上一页
}
const imgList = reactive({
  list: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  origin_list: [0, 1, 2, 3, 4, 5, 6, 7, 8],
})
// Compute the postion of each piece of the puzzle
function posi(index){
  let left = -(index%3) * 160;
  let top = -(Math.ceil((index+1)/3) - 1) * 160;
  return `${left}px ${top}px`;
}
function left(item){
  return item%3*160
}
function top(item) {
  return (Math.ceil((item+1)/3) - 1) * 160;
}
// Break up the puzzle pieces
function breakUp(){
  imgList.list.sort(function(a,b){ return Math.random()-0.5})
  // console.log('imgList: ', imgList.list)
}
// Hint
const display = reactive({
  value: 'none'
})
function hint() {
  display.value = 'block';
  setTimeout(() => {
      display.value = 'none';
  }, 3000);
}
// Change two pieces
const startPoint = reactive({
  index: 0,
})
function exchange(arr, index1, index2) {
  return arr[index2] = arr.splice(index1,1,arr[index2])[0]
}
function mousedown(index) {
  startPoint.index = index
}
function mousemove(index, e) {
  e.preventDefault()
}
function mouseup(index, e) {
let obj = document.elementFromPoint(e.clientX, e.clientY)
let end_index = Number(obj?.getAttribute('data-index'))
if (canMovePuzzle.value) {
  if (index == end_index){ // mouse
      exchange(imgList.list, imgList.list.indexOf(startPoint.index), imgList.list.indexOf(index))
  } else {
      exchange(imgList.list, imgList.list.indexOf(index), imgList.list.indexOf(end_index))
  }
}
}

// Timer
let pauseTime = 0;
const timer = reactive({
  m: 0,
  s: 0,
  ms: 0,
})
function setTime(s) {
  return (s < 10 ? '0' + s : s > 100 ? parseInt(s/10) : s)
}
const timeList = reactive({
  startTime: new Date(),
  timer_int: 0,
})
const isStarted = ref(false); // 跟踪游戏是否已经开始
// 启动游戏
function startGame() {
isPuzzleComplete.value = false;
isStarted.value = true; // 标记游戏已开始
start(); // 开始计时和打乱拼图
canMovePuzzle.value = true; // 允许移动拼图块

// 在拼图完成检查定时器
const checkCompletionTimer = setInterval(() => {
  if (JSON.stringify(imgList.list) === JSON.stringify(imgList.origin_list)) {
    console.log('已完成拼图！');
    clearInterval(timeList.timer_int);
    timeList.timer_int = 0;
    isPuzzleComplete.value = true;
    isStarted.value = false;
    canMovePuzzle.value = false; // 完成拼图后禁止移动拼图块
    clearInterval(checkCompletionTimer); // 停止拼图完成检查定时器
  }
}, 10);
}

function start() {
  timeList.startTime = new Date()
  breakUp()
  timeList.timer_int = setInterval(() => {
      let tm = new Date()
      let usedTime = tm - timeList.startTime
      timer.m = new Date(usedTime).getMinutes()
      timer.s = new Date(usedTime).getSeconds()
      timer.ms = new Date(usedTime).getMilliseconds()
      // console.log(timer)
  })
}
function pause() {
if (isStarted.value && timeList.timer_int !== 0) {
  clearInterval(timeList.timer_int);
  timeList.timer_int = 0;
  let currentTime = new Date();
  pauseTime = currentTime - timeList.startTime;
  canMovePuzzle.value = false; // 禁止移动拼图块
}
}
function resume() {
if (isStarted.value && timeList.timer_int === 0) {
  timeList.startTime = new Date(new Date() - pauseTime);
  timeList.timer_int = setInterval(() => {
    let tm = new Date();
    let usedTime = tm - timeList.startTime;
    timer.m = new Date(usedTime).getMinutes();
    timer.s = new Date(usedTime).getSeconds();
    timer.ms = new Date(usedTime).getMilliseconds();
  }, 10);
  canMovePuzzle.value = true; // 允许移动拼图块
}
}
function restart() {
isStarted.value = false; // 停止游戏
clearInterval(timeList.timer_int); // 清除计时器
startGame(); // 重新打乱拼图并开始游戏
}
</script>
  
<style scoped>
.content{
  content: '';
  height: 100%;
  top: 0;
  left: 0;
  filter: blur(Spx);
  background-color: rgb(140, 140, 245);
  background-size: cover;
  position: absolute;
  min-width: 1500px;
  display: flex
}
.main-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.imgbox{
    width: 500px;
    height: 500px;
    margin-right: 50px;
    margin-left: 150px;
}
.operate{
    width: 700px;
    font-size: 40px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.btn{
  font-size: 20px;
  padding: 5px 20px;
  border-radius: 10px;
  background-color: pink;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0);
}
.btn:hover {
  background-color: rgb(253, 174, 187);
  border: 2px solid white;
}
.background{
    width: 480px;
    height: 480px;
    background-color: aquamarine;
    position: relative;
}
.image_rome{
    width: 160px;
    height: 160px;
    background-image: url("/src/assets/puzzles/colossal1.jpg");
    background-size: 480px;
    position: absolute;
    will-change: transform;
    /* transition: all linear .3s; */
}
.hint {
    width: 200px;
    height: 200px;
    margin-top: 20px;
}
.popup-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  background-color: #c5a3e6;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  margin: 0 5px;
  background-color: pink;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 4px;
  cursor: move;
  font-size: 24px;
}
.back-button:hover {
  background-color: rgb(253, 174, 187);
  border: 2px solid white;
}
</style>
