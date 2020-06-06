import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import './style/common.less'
import router from './router/index'
import './plugins/vant'
import './config/rem'
import './config/filter'
import store from './store/index'


if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
