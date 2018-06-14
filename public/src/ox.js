import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routes from './router'
const router = new VueRouter({
  routes: routes
});

const app = new Vue({
  el: '#app',
	router
})
