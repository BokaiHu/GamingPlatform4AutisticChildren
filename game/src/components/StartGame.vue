<template>
  <div class="bgi"></div>
  <button class="back-button" @click="navigateTo('home')"><span v-html="backArrow"></span></button>
  <div class="highlight-overlay" :class="highlightedRegion"></div>
  <div class="buttons">
    <button class="button" data-region="asia" @mouseenter="setHighlightedRegion('asia')" @mouseleave="clearHighlightedRegion" @click="navigateTo('AS')">{{ $t('continent_asia') }}</button>
    <button class="button" data-region="europe" @mouseenter="setHighlightedRegion('europe')" @mouseleave="clearHighlightedRegion" @click="navigateTo('EU')">{{ $t('continent_europe') }}</button>
    <button class="button" data-region="africa" @mouseenter="setHighlightedRegion('africa')" @mouseleave="clearHighlightedRegion" @click="navigateTo('AF')">{{ $t('continent_africa') }}</button>
    <button class="button" data-region="north-america" @mouseenter="setHighlightedRegion('north-america')" @mouseleave="clearHighlightedRegion" @click="navigateTo('NA')">{{ $t('continent_na') }}</button>
    <button class="button" data-region="south-america" @mouseenter="setHighlightedRegion('south-america')" @mouseleave="clearHighlightedRegion" @click="navigateTo('SA')">{{ $t('continent_sa') }}</button>
    <button class="button" data-region="oceania" @mouseenter="setHighlightedRegion('oceania')" @mouseleave="clearHighlightedRegion" @click="navigateTo('OC')">{{ $t('continent_oceania') }}</button>
  </div>
</template>

<script>
export default {
  name: 'StartGame',
  data() {
    return {
      backArrow: '&#8592;',
      highlightedRegion: null
    };
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
    setHighlightedRegion(region) {
      this.highlightedRegion = region;
    },
    clearHighlightedRegion() {
      this.highlightedRegion = null;
    }
  }
}

</script>

<style>
.start-game-page {
  width: 100%; /* 确保元素宽度为100% */
  height: 100%; /* 确保元素高度为100% */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #026e7a;
}

.bgi {
  background-image: url("/src/assets/cWorldMap2.jpg");
  width: 1241px; /* 确保元素宽度为100% */
  height: 623px; /* 确保元素高度为100% */
}

.buttons {
  position: absolute;
  flex-direction: column;
  width: 700px;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}

.button {
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #ffb300;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #ba8200;
  border: 2px solid white;
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
  cursor: pointer;
  font-size: 24px;
}

.back-button:hover {
  background-color: #ba8200;
  border: 2px solid white;
}

.highlight-overlay::before {
  content: '';
  position: absolute;
  pointer-events: none; /* 防止叠加层影响鼠标事件的传递 */
  z-index: 1; /* 确保叠加层在按钮之上 */
  opacity: 0; /* 初始时隐藏叠加层 */
  transition: opacity 0.3s; /* 添加过渡效果 */
}

.highlight-overlay.asia::before {
  background-image: url("/src/assets/global_masks/asia_nobg1.png");
  background-size: cover;
  top: 12px;
  left: 583px;
  width: 923px;
  height: 422px;
  position: absolute;
  opacity: 0.7; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.europe::before {
  background-image: url("/src/assets/global_masks/europe_nobg.png");
  background-size: cover;
  top: -10.5%;
  left: 14.8%;
  width: 72.5%;
  height: 72.5%;
  position: absolute;
  opacity: 1.5; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.africa::before {
  background-image: url("/src/assets/global_masks/africa_nobg.png");
  background-size: cover;
  top: 23%;
  left: 12.4%;
  width: 72.5%;
  height: 72.5%;
  position: absolute;
  opacity: 0.8; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.north-america::before {
  background-image: url("/src/assets/global_masks/north-america_nobg.png");
  background-size: cover;
  top: -60px;
  left: -191px;
  width: 73%;
  height: 73%;
  position: absolute;
  opacity: 0.8; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.south-america::before {
  background-image: url("/src/assets/global_masks/south-america_nobg.png");
  background-size: cover;
  top: 255px;
  left: -98px;
  width: 72.5%;
  height: 72.5%;
  position: absolute;
  opacity: 1.0; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.oceania::before {
  background-image: url("/src/assets/global_masks/oceania_nobg.png");
  background-size: cover;
  top: 257px;
  left: 633px;
  width: 73%;
  height: 73%;
  position: absolute;
  opacity: 0.9; /* 鼠标悬停时显示叠加层 */
}
</style>
