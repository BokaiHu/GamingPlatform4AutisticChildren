// import Vue from 'vue';
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';
import axios from 'axios';
import './utils/rem.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Home from './components/Home.vue';
import StartGame from './components/StartGame.vue';
/* import Asia from './components/Asia.vue'; */
import Europe from './components/stages/Europe.vue';
/* import Africa from './components/Africa.vue'; */
/* import NorthAmerica from './components/NorthAmerica.vue'; */
/* import SouthAmerica from './components/SouthAmerica.vue'; */
import Oceania from './components/stages/Oceania.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Paris from './components/eu_stages/Paris.vue';
import Berlin from './components/eu_stages/Berlin.vue';
import Cologne from './components/eu_stages/Cologne.vue';
import Sydney from './components/oc_stages/Sydney.vue';
import Rome from './components/eu_stages/Rome.vue';
import London from './components/eu_stages/London.vue';
import Settings from './components/Settings.vue';
import Info from './components/Info.vue';
import Exit from './components/Exit.vue';
import LoadingParis from './components/LoadingParis.vue';
import LoadingBerlin from './components/LoadingBerlin.vue';
import LoadingCologne from './components/LoadingCologne.vue';
import LoadingLondon from './components/LoadingLondon.vue';
import LoadingRome from './components/LoadingRome.vue';
import zh from './lang/zh.js';
import en from './lang/en.js';

const router = createRouter({
  history: createWebHashHistory(), 
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register},
    { path: '/start', name: 'start', component: StartGame },
    { path: '/settings', name: 'settings', component: Settings },
    { path: '/info', name: 'info', component: Info },
    { path: '/exit', name: 'exit', component: Exit },
    /* { path: '/start/asia', name: 'asia', component: Asia }, */
    { path: '/start/europe', name: 'EU', component: Europe },
    { path: '/start/europe/paris', name: 'paris', component: Paris },
    { path: '/start/europe/berlin', name: 'berlin', component: Berlin },
    { path: '/start/europe/cologne', name: 'cologne', component: Cologne },
    { path: '/start/europe/london', name: 'london', component: London },
    { path: '/start/europe/rome', name: 'rome', component: Rome },
    /* { path: '/start/africa', name: 'africa', component: Africa }, */
    /* { path: '/start/north-america', name: 'north-america', component: NorthAmerica }, */
    /* { path: '/start/south-america', name: 'south-america', component: SouthAmerica }, */
    { path: '/start/oceania', name: 'OC', component: Oceania },
    { path: '/start/oceania/sydney', name: 'sydney', component: Sydney },
    { path: '/loadingparis', name: 'loadingparis', component: LoadingParis },
    { path: '/loadingberlin', name: 'loadingberlin', component: LoadingBerlin },
    { path: '/loadingcologne', name: 'loadingcologne', component: LoadingCologne },
    { path: '/loadinglondon', name: 'loadinglondon', component: LoadingLondon },
    { path: '/loadingrome', name: 'loadingrome', component: LoadingRome },
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
    document.body.classList.remove('home-page', 'europe-page', 'oceania-page');
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
  else if (to.name === 'EU') {
    document.body.classList.add('europe-page');
    document.body.classList.remove('start-game-page');
  } 
  else if (to.name === 'OC') {
    document.body.classList.add('oceania-page');
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
app.use(ElementPlus)
app.config.globalProperties.$i18n = i18n;
app.mount('#app');

app.config.globalProperties.$axios=axios;
