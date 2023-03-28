import Vue from 'vue'
import App from './App.vue'

// 使用方式1
import vueJsDriver from 'vue-js-driver';
import driverConfig from '@/config/driverConfig.js';

Vue.use(vueJsDriver, driverConfig);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
