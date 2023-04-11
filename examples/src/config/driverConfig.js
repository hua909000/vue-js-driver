/**
 * @file driver.js自定义配置
 * 
*/

export default {
  // className: '', // 包裹Driver弹窗的类名，避免css作用域污染
  allowClose: false, // 是否允许点击遮罩时关闭
  // opacity: 0, // 背景透明度，`0` 表示只弹窗无遮罩
  padding: 0, // 元素与边缘的距离
  // stageBackground: 'transparent', // 高亮元素的背景颜色
  prevBtnText: '上一步->', // 当前步骤上一步按钮的文本
  nextBtnText: '下一步->', // 当前步骤下一步按钮的文本
  closeBtnText: '关闭x', // 当前步骤关闭按钮的文本
  doneBtnText: '完成√', // 最后一个按钮的文本
  // showButtons: false // 是否显示底部的控制按钮
}