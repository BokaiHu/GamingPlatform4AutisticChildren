<template>
  <div id="startGame">
    <div class="start-game">
      <h1>The game is under developing.</h1>
      <button class="button" @click="goBack">{{ $t('goBack') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartGame',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.start-game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
}
</style>
