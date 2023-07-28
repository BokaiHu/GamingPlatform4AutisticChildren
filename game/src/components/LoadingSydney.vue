<template>
    <div>
    <img src="/src/assets/loading/sydney.png" alt="" class="img" ref="imgDiv">
    <div class="videoContainer">
      <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="muted" muted="" loop="">
      <source src="/src/assets/train.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  </template>
  
  
  
  <script>
    export default {
      name: 'LoadingSydney',
      data() {
        return {
          video: null,
          clearTime: null,
          percentage2: 0,
          colors: [
            { color: '#f56c6c', percentage: 20 },
            { color: '#e6a23c', percentage: 40 },
            { color: '#5cb87a', percentage: 60 },
            { color: '#1989fa', percentage: 80 },
            { color: '#6f7ad3', percentage: 100 },
          ],
        }
      },
  
      methods: {
        goBack() {
          this.$router.go(-1);
        },
        closeVideoPlayer () {
          this.video.dispose()
        // 在这里添加关闭视频播放器的代码
          this.video = null
        }
      },
  
      mounted() {
        this.video = document.getElementById('bgVid')
        this.video.addEventListener('ended', this.closeVideoPlayer)

        setInterval(() => {
          if (this.percentage2 != 100) 
          this.percentage2 = (this.percentage2 % 100) + 10
        }, 800),
        this.clearTime = setTimeout(() => {
        this.$router.push({
          name:"sydney"
        })},8500)
      },

      beforeDestroy(){
        if (this.video != null) { 
          this.video.pause() //关闭
          this.video.dispose();//销毁
          this.video = null
        }
      },

      destroyed(){
          clearTimeout(this.clearTime);
          this.clearTime = null // 清除
        }
    }
  </script>
  
  
  
  <style scoped>
  .demo-progress .el-progress--line {
    margin-bottom: 105px;
    width: 1300px;
    left: 33%;
  }
  
  .progress{
    position: fixed;
  }
  
  .percentage-value {
    display: block;
    margin-top: 0px;
    font-size: 30px;
  }
  .percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 30px;
  }
  
  .videoContainer{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -100;
    top: 0;
    left: 0;
  }
  
  
  
  .fullscreenVideo{
    width: 100%;
    height: 120%;
    object-fit: fill;
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
    cursor: move;
    font-size: 24px;
  }
  
  .img{
    height: 40%;
    right: 0%;
    top: 41%;
    position: absolute;
  }
  </style>
  