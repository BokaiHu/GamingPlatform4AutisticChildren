<template>
    <button class="back-button" @click="goBack"><span v-html="backArrow"></span></button>
    <div span="8" class="left"  @mousewheel.prevent="rollImg">
      <img :src="imgUrl" alt="" class="img" ref="imgDiv" @mousedown="move">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Europe',
    data() {
      return {
        backArrow: '&#8592;',
        imgUrl: '/src/assets/largeEU_nobg_flat.png'
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1); // 返回上一页
      },
      navigateTo(routeName) {
        this.$router.push({ name: routeName });
      },
      move(e) {
        e.preventDefault()
        // 获取元素
        var left = document.querySelector('.left')
        var img = document.querySelector('.img')
        var x = e.pageX - img.offsetLeft
        var y = e.pageY - img.offsetTop
        // 添加鼠标移动事件
        left.addEventListener('mousemove', move)
                function move(e) {
                img.style.left = e.pageX - x + 'px'
                img.style.top = e.pageY - y + 'px'
                }
        // 添加鼠标抬起事件，鼠标抬起，将事件移除
        img.addEventListener('mouseup', function() {
            left.removeEventListener('mousemove', move)
        })
        // 鼠标离开父级元素，把事件移除
        left.addEventListener('mouseout', function() {
            left.removeEventListener('mousemove', move)
        })
      },
      // 缩放图片
      rollImg() { 
        /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */ 
        var zoom = parseInt(this.$refs.imgDiv.style.zoom) || 100; 
        /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */ 
        zoom += event.wheelDelta / 12;
        /* 最小范围 和 最大范围 的图片缩放尺度 */ 
        if (zoom >= 80 && zoom <500) { 
        this.$refs.imgDiv.style.zoom = zoom + "%"; 
        }
        return false; 
      }
    }
  }
  
  </script>
  
  <style>
  .europe-page {
    background-color: #ffffff;
    width: 100%; /* 确保元素宽度为100% */
    height: 100%; /* 确保元素高度为100% */
    position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden
  }
  
  .left {
    position: relative;
    width: 100%; /* 确保元素宽度为100% */
    height: 100%; /* 确保元素高度为100% */
    background-color: #fff;
    padding: 20px;
    float: left;
    overflow: hidden;
  }
  
  .img {
    position: absolute;
    top: 5px;
    left: 7px;
    max-width: 9230px;
    max-height: 4600px;
    cursor: move;
  }
  
  .button {
    padding: 10px 20px;
    margin: 0 5px;
    background-color: #ffb300;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 10px 20px;
    margin: 0 5px;
    background-color: #ffb300;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 24px;
  }
  </style>
      