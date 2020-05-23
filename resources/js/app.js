/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./heroicons.js');

import routes from './route.config';
import Vue from 'vue';
import VueRouter from 'vue-router';

import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";

Vue.use(Antd);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    routes: routes,
});

new Vue({
    router
}).$mount('#app');