/**
 * @file driver.js新手引导的步骤
{
  homeSteps: [ // 首页步骤
    {
      element: '#welcome', // 高亮的元素，内部通过querySelector获取元素，还可通过DOM的方法获取，例如document.getElementById('welcome')
      popover: {
        title: '这是标题', // 弹窗的标题，为空则不显示，注：支持HTML
        description: '这是描述', // 弹窗的主体内容，注：支持HTML
        position: 'right', // 弹窗显示的位置
      },
      padding: 25 // 弹窗与高亮元素的内边距，会扩大高亮元素的宽/高
      ...
      // 更多配置：https://github.com/kamranahmedse/driver.js/blob/master/src/index.js
    }
  ],
  otherSteps: [], // 其他页面步骤
  ...
}
 */

export default {
  homeSteps: [ // 首页的步骤
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
  ],
  otherSteps: [], // 其他页面步骤
}