<template>
  <div class="container">
    <div class="light">{{ $t('title') }}</div>
    <button class="homeButton" @click="navigateTo('login')">{{ $t('startGame') }}</button>
    <button class="homeButton" @click="navigateTo('settings')">{{ $t('settings') }}</button>
    <button class="homeButton" @click="navigateTo('info')">{{ $t('info') }}</button>
    <button class="homeButton" @click="navigateTo('exit')">{{ $t('exit') }}</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    }
  }
}
</script>

<style scoped>
.light {
  font-size: 128px;
  margin-bottom: 30px;
  color: #fefefe;
  text-shadow: 0 0 0.5em #0ae642, 0 0 0.2em #5c5c5c;
  font-family: 'Roboto', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 600px;
  position: relative;
  top: 100px;
}

.homeButton {
  width: 300px;
  margin: 10px;
  padding: 10px 20px;
  background-color: #E60AAE;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: large;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 5px;
  cursor: pointer;
}
.homeButton:hover {
  background-color: #700756;
  border: 2px solid white;
}
</style>
