<template>
  <div class="content">
    <button class="back-button" @click="goBack">
      <span v-html="'&#8592;'"></span>
    </button>
    <div class="imgbox">
      <div class="background">
        <div
          class="image_paris"
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
          src="\src\assets\puzzles\ef_tower.png"
          :style="{ display: display.value, width: '200px', height: '200px' }"
        />
      </div>
    </div>
    <!-- 在模板的顶部或适当的位置添加弹出窗口元素 -->
    <transition>
      <div class="popup-window" v-if="isPuzzleComplete & !HideNotShow">
        <h3>Puzzle Complete!</h3>
        <button @click="HideNotShow = true">{{ $t("ToFrance") }}</button>
      </div>
    </transition>
    <transition>
      <div class="popup-window" v-if="isPuzzleComplete & HideNotShow">
        <Complete msg="paris" @close="isPuzzleComplete=false, HideNotShow=false" @navigate="navigateTo('EU')"></Complete>
      </div>
    </transition>
    <audio v-if="isPuzzleComplete === false" :src="bgmSrc" autoplay controls @ended="audioFinished"></audio>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import carmen from '@/assets/bgms/carmen.mp3';
import leschampselysees from '@/assets/bgms/leschampselysees.mp3';
import lavieenrose from '@/assets/bgms/lavieenrose.mp3';
import Complete from '../popup_windows/complete_pop.vue';
const router = useRouter();
const isPuzzleComplete = ref(false);
const canMovePuzzle = ref(false);
const HideNotShow = ref(false);

// BGM control
const bgmId = ref(0);
const bgmList = [
  (leschampselysees),
  (lavieenrose),
  (carmen),
];
const bgmSrc = ref(bgmList[bgmId.value]);

function navigateTo(routeName) {
  router.push({ name: routeName });
}

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
  router.go(-1); // 返回上两页
}
const imgList = reactive({
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    origin_list: [0, 1, 2, 3, 4, 5, 6, 7, 8],
})
// Compute the postion of each piece of the puzzle
function posi(index){
    let left = -(index%3) * 120;
    let top = -(Math.ceil((index+1)/3) - 1) * 120;
    return `${left}px ${top}px`;
}
function left(item){
    return item%3*120
}
function top(item) {
    return (Math.ceil((item+1)/3) - 1) * 120;
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

<style>
.content{
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    filter: blur(Spx);
    background-color: rgb(140, 140, 245);
    background-size: cover;
    position: absolute;
    display: flex;
}
.imgbox{
    width: 60%;
    height: 100%;
    color: azure;
    display: flex;
    justify-content: center;
    align-items: center;
}
.operate{
    width: 40%;
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
    border: none;
}
.background{
    width: 360px;
    height: 360px;
    background-color: aquamarine;
    position: relative;
}
.image_paris{
    width: 120px;
    height: 120px;
    background-image: url("/src/assets/puzzles/ef_tower.png");
    background-size: 360px;
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
  background-color: #c5a3e6;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>