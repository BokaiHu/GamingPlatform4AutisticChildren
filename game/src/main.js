// import Vue from 'vue';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';
import App from './App.vue'
import Home from './components/Home.vue';
import StartGame from './components/StartGame.vue';
import Settings from './components/Settings.vue';
import Info from './components/Info.vue';
import Exit from './components/Exit.vue';
import zh from './lang/zh.js';
import en from './lang/en.js';

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/start', name: 'start', component: StartGame },
    { path: '/settings', name: 'settings', component: Settings },
    { path: '/info', name: 'info', component: Info },
    { path: '/exit', name: 'exit', component: Exit }
  ]
});

const i18n = createI18n({
  locale: 'en', // 默认语言
  messages: {
    zh: zh,
    en: en,
  },
});

router.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    document.body.classList.add('home-page');
    document.body.classList.remove('start-game-page');
  } 
  else if (to.name === 'start') {
    document.body.classList.add('start-game-page');
    document.body.classList.remove('home-page');
  } 
  else if (to.name === 'settings') {
    document.body.classList.add('home-page');
    document.body.classList.remove('start-game-page');
  } 
  else if (to.name === 'info') {
    document.body.classList.add('home-page');
    document.body.classList.remove('start-game-page');
  } 
  else if (to.name === 'exit') {
    document.body.classList.add('home-page');
    document.body.classList.remove('start-game-page');
  } 
  else {
    document.body.classList.remove('home-page', 'start-game-page');
  }
  next();
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.config.globalProperties.$i18n = i18n;
app.mount('#app');
