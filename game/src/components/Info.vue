<template>
  <div id='info'>
    <div class="container">
      <h1>This is a game</h1>
      <button class="button" @click="goBack">{{ $t('goBack') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 125vh;
}
</style>
