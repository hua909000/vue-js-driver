import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';

const install = function (Vue, options = {}) {
  let vueJsDriver = {};

  function initDriver(options) {
    const driverOptions = {
      className: options && options.className || 'vue-js-driver',
      allowClose: false,
      prevBtnText: '上一步',
      nextBtnText: '下一步',
      closeBtnText: '关闭',
      doneBtnText: '完成',
      ...options
    };
    vueJsDriver = new Driver(driverOptions);
  };

  /**
   * 打开新手引导
   * @param { Array } steps 所有步骤的参数
   * @param { Number } index 开始高亮的索引
   * @returns { void }
   * @public
   */
  function showDriver (steps = [], index = 0) {
    if (!steps.length) {
      return;
    }

    vueJsDriver.defineSteps(steps);
    vueJsDriver.start(index);
  }

  initDriver(options);
  vueJsDriver.showDriver = showDriver;
  Vue.prototype.$vueJsDriver = vueJsDriver;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)  ;
}

export default {
  install
}