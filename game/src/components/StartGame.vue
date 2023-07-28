<template>
  <button class="sgback-button" @click="navigateTo('home')"><span v-html="backArrow"></span></button>
  <div class="bgi">
    <div class="highlight-overlay" :class="highlightedRegion"></div>
  </div>
  <div class="sgbuttons">
    <button class="sgbutton" data-region="europe" @mouseenter="setHighlightedRegion('europe')" @mouseleave="clearHighlightedRegion" @click="navigateTo('EU')">{{ $t('continent_europe') }}</button>
    <button class="sgbutton" data-region="oceania" @mouseenter="setHighlightedRegion('oceania')" @mouseleave="clearHighlightedRegion" @click="navigateTo('OC')">{{ $t('continent_oceania') }}</button>
    <button class="lockbutton" data-region="asia" @mouseenter="setHighlightedRegion('asia')" @mouseleave="clearHighlightedRegion">{{ $t('continent_asia') }}</button>
    <button class="lockbutton" data-region="africa" @mouseenter="setHighlightedRegion('africa')" @mouseleave="clearHighlightedRegion">{{ $t('continent_africa') }}</button>
    <button class="lockbutton" data-region="north-america" @mouseenter="setHighlightedRegion('north-america')" @mouseleave="clearHighlightedRegion">{{ $t('continent_na') }}</button>
    <button class="lockbutton" data-region="south-america" @mouseenter="setHighlightedRegion('south-america')" @mouseleave="clearHighlightedRegion">{{ $t('continent_sa') }}</button>
    <!-- <button class="sgbutton" data-region="asia" @mouseenter="setHighlightedRegion('asia')" @mouseleave="clearHighlightedRegion" @click="navigateTo('AS')">{{ $t('continent_asia') }}</button>
    <button class="sgbutton" data-region="africa" @mouseenter="setHighlightedRegion('africa')" @mouseleave="clearHighlightedRegion" @click="navigateTo('AF')">{{ $t('continent_africa') }}</button>
    <button class="sgbutton" data-region="north-america" @mouseenter="setHighlightedRegion('north-america')" @mouseleave="clearHighlightedRegion" @click="navigateTo('NA')">{{ $t('continent_na') }}</button>
    <button class="sgbutton" data-region="south-america" @mouseenter="setHighlightedRegion('south-america')" @mouseleave="clearHighlightedRegion" @click="navigateTo('SA')">{{ $t('continent_sa') }}</button> -->
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
  min-width: 1500px;
  display: flex;
  justify-content: center;
  background-color: #026e7a;
}

.bgi {
  background-image: url("/src/assets/cWorldMap2.jpg");
  width: 1241px;
  height: 623px;
  position: relative;
  margin-bottom: 50px;
}

.sgbuttons {
  position: absolute;
  width: 700px;
  left: 50%;
  transform: translateX(-50%);
}

.sgbutton {
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #ffb300;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 4px;
  cursor: pointer;
}

.sgbutton:hover {
  background-color: #ba8200;
  border: 2px solid white;
}

.sgback-button {
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

.sgback-button:hover {
  background-color: #ba8200;
  border: 2px solid white;
}

.lockbutton {
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #808080;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 4px;
  cursor: pointer;
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
  position: absolute;
  top: -99.5px;
  left: 245px;
  width: 1350px;
  height: 629px;
  opacity: 1; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.europe::before {
  background-image: url("/src/assets/global_masks/europe_nobg.png");
  background-size: cover;
  position: absolute;
  top: -63px;
  left: 187px;
  width: 940px;
  height: 460px;
  opacity: 1.5; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.africa::before {
  background-image: url("/src/assets/global_masks/africa_nobg.png");
  background-size: cover;
  top: 154px;
  left: 159.5px;
  width: 935px;
  height: 455px;
  position: absolute;
  opacity: 1; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.north-america::before {
  background-image: url("/src/assets/global_masks/north-america_nobg.png");
  background-size: cover;
  top: -40px;
  left: -149px;
  width: 935px;
  height: 455px;
  position: absolute;
  opacity: 0.8; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.south-america::before {
  background-image: url("/src/assets/global_masks/south-america_nobg.png");
  background-size: cover;
  top: 224px;
  left: -69px;
  width: 935px;
  height: 455px;
  position: absolute;
  opacity: 1.5; /* 鼠标悬停时显示叠加层 */
}

.highlight-overlay.oceania::before {
  background-image: url("/src/assets/global_masks/oceania_nobg.png");
  background-size: cover;
  top: 225px;
  left: 541.5px;
  width: 935px;
  height: 455px;
  position: absolute;
  opacity: 0.9; /* 鼠标悬停时显示叠加层 */
}
</style>
