<template>
  <div class="hello">
    <h1 id="welcome">{{ msg }}</h1>
    <p class="description">
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3 @click="showDriver">显示引导Show Demo</h3>
    <h3 @click="highSingleElement">突出单个元素</h3>
    <h3 @click="highSingleElement2">突出单个元素（含配置）</h3>
  </div>
</template>

<script>

// 使用方式2
// import Vue from 'vue';

// import vueJsDriver from 'vue-js-driver';
// import driverConfig from '@/config/driverConfig.js';

// Vue.use(vueJsDriver, driverConfig);

import steps from '../steps.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    showDriver () {

      // 通过$vueJsDriver来调用，1代表跳转到第二步，不传默认跳转至第一步
      this.$vueJsDriver.showDriver(steps.homeSteps);
    },
    highSingleElement () {
      this.$vueJsDriver.highlight('#welcome');
    },
    highSingleElement2 () {
      this.$vueJsDriver.highlight({
        element: '#welcome',
        popover: {
          title: 'Title for the Popover',
          description: 'Description for it',
          position: 'bottom',
          offset: 20
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
