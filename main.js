import Vue from 'vue/dist/vue.common.js';

import Message from './Message.vue';
Vue.component('message', Message);

let App = new Vue({
    el: '#app',
})