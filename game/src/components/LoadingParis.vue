<template>
  <div>
  <img src="/src/assets/loading/ef_tower.png" alt="" class="img" ref="imgDiv">
  <div class="videoContainer">
    <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="muted" muted="" loop="">
    <source src="/src/assets/train.mp4" type="video/mp4">
    </video>
  </div>
</div>
</template>



<script>
  export default {
    name: 'LoadingParis',
    data() {
      return {
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
      }
    },

    mounted() {
      setInterval(() => {
        if (this.percentage2 != 100) 
        this.percentage2 = (this.percentage2 % 100) + 10
      }, 800)
      // setTimeout(() => {
      // this.$router.push({
      //   name:"paris"
      // })},8500)
    },
  }
</script>



<style scoped>
.demo-progress .el-progress--line {
  position: relative;
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
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -100;
  top: 0;
  left: 0;
}



.fullscreenVideo{
  width: 100%;
  height: 100%;
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
  height: 60%;
  right: -15%;
  position: absolute;
}
</style>
