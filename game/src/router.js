import Vue from 'vue'
import VueRouter from 'vue-router';
import starter from './components/starter.vue'
import StartGame from './components/StartGame.vue';
import Settings from './components/Settings.vue';
import Info from './components/Info.vue';
import Exit from './components/Exit.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/home', component: starter},
    { path: '/start', component: StartGame },
    { path: '/settings', component: Settings },
    { path: '/info', component: Info },
    { path: '/exit', component: Exit }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
