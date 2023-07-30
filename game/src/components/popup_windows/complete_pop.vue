<template>
  <div class="pop-complete">
    <div class="i-t">
      <!-- 左侧图片 -->
      <div class="image-container">
          <img v-if="msg === 'frenchCar'" src="~@/assets/intros/bugatti.jpg" />
          <img v-else-if="msg === 'germanCar0'" src="~@/assets/intros/porsche.jpg" />
          <img v-else-if="msg === 'italyCar'" src="~@/assets/intros/ferrari.jpg" />
          <img v-else-if="msg === 'britishCar'" src="~@/assets/intros/jaguar.jpg" />
          <img v-else-if="msg === 'germanCar1'" src="~@/assets/intros/benz.jpg" />
          <img v-else-if="msg === 'sydney'" src="~@/assets/puzzles/GreatOceanRoad.jfif" />

          <img v-else-if="msg === 'frenchCuisine'" src="~@/assets/intros/baguette.png" />
          <img v-else-if="msg === 'germanCuisine0'" src="~@/assets/intros/sausage.jpg" />
          <img v-else-if="msg === 'italyCuisine'" src="~@/assets/intros/pizza.jpg" />
          <img v-else-if="msg === 'britishCuisine'" src="~@/assets/intros/fishandchips.jpg" />
          <img v-else-if="msg === 'germanCuisine1'" src="~@/assets/intros/schnitzel.jpg" />
          <img v-else-if="msg === 'sydney'" src="~@/assets/puzzles/MilfordSound.jpg" />

          <img v-else-if="msg === 'frenchCurrency'" src="~@/assets/intros/frank.jpg" />
          <img v-else-if="msg === 'germanCurrency0'" src="~@/assets/intros/mark.jpg" />
          <img v-else-if="msg === 'italyCurrency'" src="~@/assets/intros/lira.jpg" />
          <img v-else-if="msg === 'britishCurrency'" src="~@/assets/intros/pound.jpg" />
          <img v-else-if="msg === 'germanCurrency1'" src="~@/assets/intros/euro.jpg" />
          <img v-else-if="msg === 'sydney'" src="~@/assets/puzzles/MilfordSound.jpg" />

          <img v-else-if="msg === 'frenchFlower'" src="~@/assets/intros/iris.jpg" />
          <img v-else-if="msg === 'germanFlower'" src="~@/assets/intros/cornflower.jpg" />
          <img v-else-if="msg === 'italyFlower'" src="~@/assets/intros/lily.jpg" />
          <img v-else-if="msg === 'britishFlower'" src="~@/assets/intros/tudorrose.jpg" />
          <img v-else-if="msg === 'sydney'" src="~@/assets/puzzles/MilfordSound.jpg" />
      </div>
      <!-- 右侧文字介绍 -->
      <div class="text-container">
        <p v-if="msg === 'frenchCar'">
          {{ $t('FrenchCars') }}
          <br>
          <a href="https://www.youtube.com/watch?v=lKFU6SLf_v4" target="_blank">{{ $t('FrenchCarsLink') }}</a>
        </p>
        <p v-else-if="msg === 'germanCar0'">
          {{ $t('GermanCars0') }}
          <br>
          <a href="https://www.youtube.com/watch?v=U1k0hg_X6Yc" target="_blank">{{ $t('GermanCarsLink0') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'italyCar'">
          {{ $t('ItalyCars') }}
          <br>
          <a href="https://www.youtube.com/watch?v=k1bB_mU4wq0" target="_blank">{{ $t('ItalyCarsLink') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'britishCar'">
          {{ $t('BritishCars') }}
          <br>
          <a href="https://www.youtube.com/watch?v=LuANURnBzWQ" target="_blank">{{ $t('BritishCarsLink') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'germanCar1'">
          {{ $t('GermanCars1') }}
          <br>
          <a href="https://www.youtube.com/watch?v=_8VA9jiKiAk" target="_blank">{{ $t('GermanCarsLink1') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'sydney'">
          {{ $t('GreatOceanRoad') }}
          <br>
          <a href="https://www.youtube.com/watch?v=K3QdYOl1AJU" target="_blank">{{ $t('GreatOceanRoadLink') }}</a>
          <br>
        </p>

        <p v-else-if="msg === 'frenchCuisine'">
          {{ $t('FrenchCuisine') }}
          <br>
          <a href="https://www.youtube.com/watch?v=AoHYO1yfe9w" target="_blank">{{ $t('FrenchCuisineLink') }}</a>
        </p>
        <p v-else-if="msg === 'germanCuisine0'">
          {{ $t('GermanCuisine0') }}
          <br>
          <a href="https://www.youtube.com/watch?v=0Sr9pUYiF2k" target="_blank">{{ $t('GermanCuisineLink') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'italyCuisine'">
          {{ $t('ItalyCuisine') }}
          <br>
          <a href="https://www.youtube.com/watch?v=7toSikYGFNM" target="_blank">{{ $t('ItalyCuisineLink0') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'britishCuisine'">
          {{ $t('BritishCuisine') }}
          <br>
          <a href="https://www.youtube.com/watch?v=8F0FSm5lVvs" target="_blank">{{ $t('BritishCuisineLink') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'germanCuisine1'">
          {{ $t('GermanCuisine1') }}
          <br>
          <a href="https://www.youtube.com/watch?v=KzGxq_KDwt8&t=162s" target="_blank">{{ $t('GermanCuisineLink1') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'austriliaCuisine'">
          {{ $t('AustriliaCuisine') }}
          <br>
          <a href="https://www.youtube.com/watch?v=_eMAXOp2PvA" target="_blank">{{ $t('AustriliaCuisineLink') }}</a>
          <br>
        </p>

        <p v-else-if="msg === 'frenchCurrency'">
          {{ $t('FrenchCurrency') }}
          <br>
          <a href="https://www.youtube.com/watch?v=jKkrHMHkA8Y" target="_blank">{{ $t('FrenchCurrencyLink') }}</a>
        </p>
        <p v-else-if="msg === 'germanCurrency0'">
          {{ $t('GermanCurrency0') }}
          <br>
          <a href="https://www.youtube.com/watch?v=HOsVZDmK5tc" target="_blank">{{ $t('GermanCurrencyLink0') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'italyCurrency'">
          {{ $t('ItalyCurrency') }}
          <br>
          <a href="https://www.youtube.com/watch?v=dYh32xfsL8E" target="_blank">{{ $t('ItalyCurrencyLink') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'britishCurrency'">
          {{ $t('BritishCurrency') }}
          <br>
          <a href="https://www.youtube.com/watch?v=dFzAU3u06Ps" target="_blank">{{ $t('BritishCurrencyLink') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'germanCurrency1'">
          {{ $t('GermanCurrency1') }}
          <br>
          <a href="https://www.youtube.com/watch?v=3hrx8WK2TH0" target="_blank">{{ $t('GermanCurrencyLink1') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'austriliaCuisine'">
          {{ $t('AustriliaCuisine') }}
          <br>
          <a href="https://www.youtube.com/watch?v=_eMAXOp2PvA" target="_blank">{{ $t('AustriliaCuisineLink') }}</a>
          <br>
        </p>

        <p v-else-if="msg === 'frenchFlower'">
          {{ $t('FrenchFlower') }}
          <br>
          <a href="https://www.youtube.com/watch?v=lFMqinJIdYE" target="_blank">{{ $t('FrenchFlowerLink') }}</a>
        </p>
        <p v-else-if="msg === 'germanFlower'">
          {{ $t('GermanFlower') }}
          <br>
          <a href="https://www.youtube.com/watch?v=oQ3A-XDhHvg" target="_blank">{{ $t('GermanFlowerLink') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'italyFlower'">
          {{ $t('ItalyFlower') }}
          <br>
          <a href="https://www.youtube.com/watch?v=WFsMnd5eqLw" target="_blank">{{ $t('ItalyFlowerLink0') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'britishFlower'">
          {{ $t('BritishFlower') }}
          <br>
          <a href="https://www.youtube.com/watch?v=jiMVZvuNYeo&t=107" target="_blank">{{ $t('BritishFlowerLink') }}</a>
          <br>
        </p>
        <p v-else-if="msg === 'austriliaCuisine'">
          {{ $t('AustriliaCuisine') }}
          <br>
          <a href="https://www.youtube.com/watch?v=_eMAXOp2PvA" target="_blank">{{ $t('AustriliaCuisineLink') }}</a>
          <br>
        </p>
      </div>
    </div>

    <!-- 按钮 -->
    <div class="button-container">
      <button @click="closePopup">{{ $t('goBack') }}</button>
      <button @click="navigation">{{ $t('ReturnToMainStages') }}</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps  } from 'vue';
import iParis from '@/assets/intro_audios/EiffelTower.mp3';
import iBerlin from '@/assets/intro_audios/BrandenburgGate.mp3';
import iRome from '@/assets/intro_audios/Colosseum.mp3';
import iLondon from '@/assets/intro_audios/BigBen.mp3';
import iCologne from '@/assets/intro_audios/CologneCathedral.mp3';
import iSydney from '@/assets/intro_audios/CologneCathedral.mp3';
const props = defineProps({
    msg:String,
})
const emit = defineEmits(['close', 'navigate'])
const closePopup = () => {
    emit('close')
}
const navigation = () => {
    emit('navigate')
}
</script>
  
<style>
.pop-window {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* 设置按钮垂直排列 */
  background-color: #c5a3e6; /* 修改背景色为紫色 */
  position: relative; /* 添加position属性 */
  z-index: 999; /* 设置较高的z-index值 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%; /* 添加宽度 */
  height: auto; /* 添加高度 */
}
  
.image-container {
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  width: 80%;
  height: auto;
}

.text-container {
  flex: 1; /* 文字占满剩余空间 */
  padding: 0 20px;
  font-size: 18px; /* 设置文字大小为18像素 */
  line-height: 1.6; /* 设置行间距为1.6倍文字大小 */
  text-align: justify; /* 实现两端对齐效果 */
}

.i-t {
  margin: 0;
  display: flex; /* 设置图片和文字水平排列 */
  flex-wrap: wrap; /* 自动换行 */
  color: #000000;
}

.button-container {
  display: flex;
  flex-direction: row; /* 设置按钮水平排列 */
  align-items: center; /* 居中对齐按钮 */
  margin-top: 20px;
}

.button-container button {
  margin: 10px; /* 调整按钮之间的间距 */
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 5px;
  cursor: pointer;
}

.button-container button:hover {
  background-color: #006bde;
  border: 2px solid white;
}
</style>
  