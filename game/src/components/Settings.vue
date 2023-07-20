<template>
  <div class="settings">
    <div class="container">
      <h2>{{ $t('settings') }}</h2>
      <button class="button" @click="showLanguageOptions">{{ $t('language') }}</button>
      <div v-if="showOptions">
        <button class="button" @click="selectLanguage('zh')">中文</button>
        <button class="button" @click="selectLanguage('en')">English</button>
      </div>
      <button class="button" @click="goBack">{{ $t('goBack') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      showOptions: false, // 选项框显示状态
      selectedLanguage: '', // 选中的语言
    };
  },
  methods: {
    showLanguageOptions() {
      this.showOptions = true; // 显示选项框
    },
    selectLanguage(language) {
      this.selectedLanguage = language; // 保存选中的语言
      this.showOptions = false; // 隐藏选项框
      this.$i18n.locale = language; // 切换语言
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
}

.settings h2 {
  margin-bottom: 20px;
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

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 125vh;
}
</style>
