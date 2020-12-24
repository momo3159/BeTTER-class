import Vue from 'vue';
import App from './App';
import store from '../store';
import vuetify from '../plugins/vuetify'

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;
Vue.use(vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  vuetify,
  render: h => h(App),
});
