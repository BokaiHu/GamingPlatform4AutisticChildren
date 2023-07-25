<template>
  <div class="europe-page">
    <div class="container0">
      <button class="back-button" @click="goBack"><span v-html="backArrow"></span></button>
      <div span="8" class="left" ref="left" @mousewheel.prevent="rollImg">
        <img src="~@/assets/EU_map_nobg.png" alt="" class="img" ref="imgDiv" @mousedown="move">
        <button class="learn-more" v-for="button in buttons" :key="button.id" :style="buttonStyle(button)" ref="buttonDivs" @click="togglePopup(button.route)"></button>
      </div>
      <transition>
        <div v-if="showParis" class="pop-window">
          <pop-paris msg="paris" @close="showParis=false" @navigate="navigateTo('paris')"></pop-paris>
        </div>
        <div v-else-if="showBerlin" class="pop-window">
          <pop-paris msg="berlin" @close="showBerlin=false" @navigate="navigateTo('berlin')"></pop-paris>
        </div>
        <div v-else-if="showRome" class="pop-window">
          <pop-paris msg="rome" @close="showRome=false" @navigate="navigateTo('rome')"></pop-paris>
        </div>
        <div v-else-if="showCologne" class="pop-window">
          <pop-paris msg="cologne" @close="showCologne=false" @navigate="navigateTo('cologne')"></pop-paris>
        </div>
        <div v-else-if="showLondon" class="pop-window">
          <pop-paris msg="london" @close="showLondon=false" @navigate="navigateTo('london')"></pop-paris>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import PopParis from '../popup_windows/pop_paris.vue'
export default {
    name: 'Europe',
    data() {
      return {
        showParis: false,
        showBerlin: false,
        showRome: false,
        showCologne: false,
        showLondon: false,
        backArrow: '&#8592;',
        buttons: [
          { id: 1, x: 600, y: 465, route: "paris", show: false, },
          { id: 2, x: 580, y: 403, route: "london", show: false, },
          { id: 3, x: 795, y: 420, route: "berlin", show: false, },
          { id: 4, x: 700, y: 430, route: "cologne", show: false, },
          { id: 5, x: 770, y: 520, route: "rome", show: false, },
          // 添加更多按钮...
        ],
        buttonXs: [],
      };
    },
    mounted() {
      // 初始化按钮位置信息数组
      this.$nextTick(() => {
        this.buttonXs = this.$refs.buttonDivs.map((button) => {
          return button.offsetLeft;
        });
      });
    },
    methods: {
      buttonStyle(button) {
        return {
          left: `${button.x}px`,
          top: `${button.y}px`
        };
      },
      goBack() {
        this.$router.push({ name: 'start'}); // 返回上一页
      },
      navigateTo(routeName) {
        this.$router.push({ name: routeName });
      },
      move(e) {
        e.preventDefault()
        // 获取元素
        var left = this.$refs.left
        var img = this.$refs.imgDiv
        this.buttonXs = this.$refs.buttonDivs.map((button) => {
          return e.pageX - button.offsetLeft;
        });
        var imgX = e.pageX - img.offsetLeft
        // var buttonX = e.pageX - button0.offsetLeft
        // var y = e.pageY - img.offsetTop
        // 添加鼠标移动事件
        const move = (e) => {
          img.style.left = e.pageX - imgX + "px";
          this.$refs.buttonDivs.forEach((button, index) => {
            button.style.left = e.pageX - this.buttonXs[index] + "px";
          });
        };

        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', move);
        });
      },
      // 缩放图片
      rollImg() { 
        /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */ 
        var imgZoom = parseInt(this.$refs.imgDiv.style.zoom) || 100; 
        /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */ 
        imgZoom += event.wheelDelta / 12;
        /* 最小范围 和 最大范围 的图片缩放尺度 */ 
        if (zoom >= 80 && zoom < 5000) { 
          this.$refs.imgDiv.style.zoom = imgZoom + "%"; 
        }
        return false; 
      },
      togglePopup(route) {
        if (route === 'paris') {
          this.showParis = !this.showParis;
          this.showBerlin = false;
          this.showRome = false;
          this.showCologne = false;
          this.showLondon = false;
        }
        else if (route === 'berlin') {
          this.showBerlin = !this.showBerlin;
          this.showParis = false;
          this.showRome = false;
          this.showCologne = false;
          this.showLondon = false;
        }
        else if (route === 'rome') {
          this.showRome = !this.showRome;
          this.showParis = false;
          this.showBerlin = false;
          this.showCologne = false;
          this.showLondon = false;
        }
        else if (route === 'cologne') {
          this.showCologne = !this.showCologne;
          this.showParis = false;
          this.showBerlin = false;
          this.showRome = false;
          this.showLondon = false;
        }
        else if (route === 'london') {
          this.showLondon = !this.showLondon;
          this.showParis = false;
          this.showBerlin = false;
          this.showRome = false;
          this.showCologne = false;
        }
        // 添加其他弹窗的切换逻辑
      },
    },
    components: {
      PopParis, // 注册PopParis组件
      // 添加其他弹窗的组件
    },
}
</script>

<style scoped>
.europe-page {
  background-image: url("../../assets/table.jpg");
  width: 5000px;
  min-width: 1500px;
}

.container0 {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.left {
  width: 1200px;
  height: 800px;
  float: left;
  overflow: hidden;
}

.img {
  position: absolute;
  top: 80px;
  width: 2000px; /* 确保元素宽度为100% */
  cursor: move;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* 离开和进入过程中的样式 */
.v-enter-active,
.v-leave-active {
  /* 添加过渡动画 */
  transition: opacity 0.5s ease;
}
/* 进入之后和离开之前的样式 */
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
button.learn-more {
  top: 380px;
  left: 500px;
  width: 10px;
  height: 15px;
  position: absolute;
  cursor: move;
  text-transform: uppercase;
  background: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 50%;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
}
button.learn-more::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.3em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}
button.learn-more:hover {
    background: #ffe9e9;
    transform: translate(0, 0.1em);
}
button.learn-more:hover::before {
    box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    transform: translate3d(0, 0.2em, -1em);
}
button.learn-more:active {
    background: #ffe9e9;
    transform: translate(0em, 0.3em);
}
button.learn-more:active::before {
    box-shadow: 0 0 0 1px #b18597, 0 0 #ffe3e2;
    transform: translate3d(0, 0, -1em);
}
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #ffb300;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 4px;
  cursor: move;
  font-size: 24px;
}
.back-button:hover {
  background-color: #ba8200;
  border: 2px solid white;
}
</style>
      