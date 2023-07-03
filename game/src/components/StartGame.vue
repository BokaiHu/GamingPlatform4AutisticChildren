<template>
  <button class="back-button" @click="goBack"><span v-html="backArrow"></span></button>
  <div class="map">
    <div class="highlight-overlay" :class="highlightedRegion"></div>
    <div class="buttons">
      <button class="button" data-region="asia" @mouseover="setHighlightedRegion('asia')" @mouseout="clearHighlightedRegion">{{ $t('continent_asia') }}</button>
      <button class="button" data-region="europe" @mouseover="setHighlightedRegion('europe')" @mouseout="clearHighlightedRegion">{{ $t('continent_europe') }}</button>
      <button class="button" data-region="africa" @mouseover="setHighlightedRegion('africa')" @mouseout="clearHighlightedRegion">{{ $t('continent_africa') }}</button>
      <button class="button" data-region="north-america" @mouseover="setHighlightedRegion('north-america')" @mouseout="clearHighlightedRegion">{{ $t('continent_na') }}</button>
      <button class="button" data-region="south-america" @mouseover="setHighlightedRegion('south-america')" @mouseout="clearHighlightedRegion">{{ $t('continent_sa') }}</button>
      <button class="button" data-region="oceania" @mouseover="setHighlightedRegion('oceania')" @mouseout="clearHighlightedRegion">{{ $t('continent_oceania') }}</button>
    </div>
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
    goBack() {
      this.$router.go(-1); // 返回上一页
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
.map {
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  transition: background-position 0.3s;
}

.buttons {
  position: absolute;
  flex-direction: column;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
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

.button:hover {
  background-color: #2980b9;
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
  background-image: url("/src/assets/asia_nobg.png");
  background-size: cover;
  top: -8px;
  left: 515px;
  width: 72.5%;
  height: 72.5%;
  position: absolute;
  opacity: 0.7; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.europe::before {
  background-image: url("/src/assets/europe_nobg.png");
  background-size: cover;
  top: -82px;
  left: 218px;
  width: 72.5%;
  height: 72.5%;
  position: absolute;
  opacity: 0.9; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.africa::before {
  background-image: url("/src/assets/africa_nobg.png");
  background-size: cover;
  top: 176px;
  left: 182px;
  width: 72.5%;
  height: 72.5%;
  position: absolute;
  opacity: 0.8; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.north-america::before {
  background-image: url("/src/assets/north-america_nobg.png");
  background-size: cover;
  top: -60px;
  left: -191px;
  width: 73%;
  height: 73%;
  position: absolute;
  opacity: 0.8; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.south-america::before {
  background-image: url("/src/assets/south-america_nobg.png");
  background-size: cover;
  top: 255px;
  left: -98px;
  width: 72.5%;
  height: 72.5%;
  position: absolute;
  opacity: 1.0; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.oceania::before {
  background-image: url("/src/assets/oceania_nobg.png");
  background-size: cover;
  top: 257px;
  left: 633px;
  width: 73%;
  height: 73%;
  position: absolute;
  opacity: 0.9; /* 鼠标悬停时显示叠加层 */
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
