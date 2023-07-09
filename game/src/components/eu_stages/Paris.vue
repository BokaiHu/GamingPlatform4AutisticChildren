<template>
  <div class="content">
    <button class="back-button" @click="goBack">
      <span v-html="'&#8592;'"></span>
    </button>
    <div class="imgbox">
      <div class="background">
        <div
          class="image_list"
          :style="{ left: left(item) + 'px', top: top(item) + 'px', backgroundPosition: posi(index) }"
          v-for="(index, item) in imgList.list"
          :data-index="index"
          :key="index"
          @mousedown="mousedown(index, $event)"
          @touchstart="mousedown(index, $event)"
        ></div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

function goBack() {
  router.go(-1); // 返回上一页
}
const imgList = reactive({
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    origin_list: [0, 1, 2, 3, 4, 5, 6, 7, 8],
})
// Compute the postion of each piece of the puzzle
function posi(index: any){
    let left = -(index%3) * 120;
    let top = -(Math.ceil((index+1)/3) - 1) * 120;
    return `${left}px ${top}px`;
}
function left(item: any){
    return item%3*120
}
function top(item: any) {
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
function exchange(arr: any, index1: any, index2: any) {
    return arr[index2] = arr.splice(index1,1,arr[index2])[0]
}
let isDragging = false;

function mousedown(index: any, event: MouseEvent | TouchEvent) {
  if (event instanceof MouseEvent) {
    isDragging = true;
    document.addEventListener('mousemove', (e) => mousemove(index, e));
    document.addEventListener('mouseup', (e) => mouseup(index, e));
  } else if (event instanceof TouchEvent) {
    isDragging = true;
    document.addEventListener('touchmove', (e) => mousemove(index, e));
    document.addEventListener('touchend', (e) => mouseup(index, e));
  }
}

function mousemove(index: any, event: MouseEvent | TouchEvent) {
  event.preventDefault();
  if (isDragging) {
    if (event instanceof MouseEvent) {
      const touch = event;
      const obj = document.elementFromPoint(touch.clientX, touch.clientY);
      const end_index = Number((obj as HTMLElement)?.getAttribute('data-index'));
      if (typeof end_index === 'number' && !isNaN(end_index)) {
        exchange(imgList.list, index, end_index);
        updatePuzzleBlockPositions(); // 更新拼图块的位置
      }
    } else if (event instanceof TouchEvent) {
      const touch = event.touches[0];
      const obj = document.elementFromPoint(touch.clientX, touch.clientY);
      const end_index = Number((obj as HTMLElement)?.getAttribute('data-index'));
      if (typeof end_index === 'number' && !isNaN(end_index)) {
        exchange(imgList.list, index, end_index);
        updatePuzzleBlockPositions(); // 更新拼图块的位置
      }
    }
  }
}

function updatePuzzleBlockPositions() {
  const puzzleBlocks = document.querySelectorAll('.image_list');
  puzzleBlocks.forEach((block, idx) => {
    block.style.left = `${left(idx)}px`;
    block.style.top = `${top(idx)}px`;
  });
}
function mouseup(index: any, event: MouseEvent | TouchEvent) {
  if (event instanceof MouseEvent) {
    document.removeEventListener('mousemove', (e) => mousemove(index, e));
    document.removeEventListener('mouseup', (e) => mouseup(index, e));
  } else if (event instanceof TouchEvent) {
    document.removeEventListener('touchmove', (e) => mousemove(index, e));
    document.removeEventListener('touchend', (e) => mouseup(index, e));
  }

  if (JSON.stringify(imgList.list) === JSON.stringify(imgList.origin_list)) {
    console.log('已完成拼图！');
    console.log(timer);
    clearInterval(timeList.timer_int);
    timeList.timer_int = 0;
  }
}


// Timer
let pauseTime = 0;
const timer = reactive({
    m: 0,
    s: 0,
    ms: 0,
})
function setTime(s: any) {
    return (s < 10 ? '0' + s : s > 100 ? parseInt(s/10) : s)
}
const timeList = reactive({
    startTime: new Date(),
    timer_int: 0,
})
const isStarted = ref(false); // 跟踪游戏是否已经开始
// 启动游戏
function startGame() {
  isStarted.value = true; // 标记游戏已开始
  start(); // 开始计时和打乱拼图
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
  }
}
function resume() {
  if (timeList.timer_int === 0) {
    timeList.startTime = new Date(new Date() - pauseTime);
    timeList.timer_int = setInterval(() => {
      let tm = new Date();
      let usedTime = tm - timeList.startTime;
      timer.m = new Date(usedTime).getMinutes();
      timer.s = new Date(usedTime).getSeconds();
      timer.ms = new Date(usedTime).getMilliseconds();
    }, 10);
  }
}
function restart() {
  isStarted.value = true;
  startGame(); // 重新打乱拼图
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
.image_list{
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
</style>