/**
 * @file driver.js新手引导的步骤
{
  homeSteps: [
    {
      element: '#welcome', // 高亮的元素 内部通过querySelector获取元素，还可通过DOM的方法例如document.getElementById('welcome')
      popover: {
        title: '这是标题', // 标题，为空需要设置，否则不显示 ps：支持HTML
        description: '这是描述', // 描述 ps：支持HTML
        position: 'right', // popover显示的位置 left, left-center, left-bottom, top, top-center, top-right, right, right-center, right-bottom, bottom, bottom-center, bottom-right, mid-center
      },
      padding: 25 // 弹窗与高亮元素的内边距
      ...
      // 更多配置：https://github.com/kamranahmedse/driver.js/blob/master/src/index.js
    }
  ]
}
 */

export default {
  // 首页的步骤
  homeSteps: [
    {
      element: '#logo',
      popover: {
        className: 'first-step-popover-class',
        title: 'Logo',
        description: '欢迎来到vue-js-driver的examples',
        position: 'right-center'
      },
    },
    {
      element: '#welcome',
      popover: {
        title: 'Welcome',
        description: '基于driver.js封装的vue2版轻量级新手引导库',
        position: 'top-center',
      }
    },
    {
      element: '.description',
      popover: {
        title: '<em>Description<em>',
        description: '支持HTML标签，<strong>欢迎start</strong>',
        position: 'bottom-center'
      },
      padding: 25
    }
  ]
}