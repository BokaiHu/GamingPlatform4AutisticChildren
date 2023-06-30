<template>
  <div class="home">
    <div class="container">
      <div class="light">{{ $t('title') }}</div>
      <button class="button" @click="navigateTo('start')">{{ $t('startGame') }}</button>
      <button class="button" @click="navigateTo('settings')">{{ $t('settings') }}</button>
      <button class="button" @click="navigateTo('info')">{{ $t('info') }}</button>
      <button class="button" @click="navigateTo('exit')">{{ $t('exit') }}</button>
    </div>
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
  font-size: 92px;
  margin-bottom: 140px;
  color: #fefefe;
  text-shadow: 0 0 0.5em #0ae642, 0 0 0.2em #5c5c5c;
}

.button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
