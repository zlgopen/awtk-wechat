let asm = require("../../utils/awtk_asm.js");
let web = require("../../utils/awtk_web.js");

let Awtk = web.Awtk;
let TBrowser = web.TBrowser;
let VGCanvas = web.VGCanvas;
let ImageLoader = web.ImageLoader;
let mainLoopPost = web.mainLoopPost;
let mainLoopStep = web.mainLoopStep;

TBrowser.init();

// pages/awtk/awtk_main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  lastX : 0,
  lastY : 0,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Awtk.init();
  },
  
  bindTouchStart: function(e) {
    let touch = e.touches[0];
    mainLoopPost({type:"pointerdown", x: touch.x, y:touch.y, timeStamp:e.timeStamp});
    this.lastX = touch.x;
    this.lastY = touch.y;
  },

  bindTouchMove: function (e) {
    let touch = e.touches[0];
    mainLoopPost({type:"pointermove", x: touch.x, y:touch.y, timeStamp:e.timeStamp});
    this.lastX = touch.x;
    this.lastY = touch.y;
  },

  bindTouchEnd: function (e) {
    mainLoopPost({type:"pointerup", x: this.lastX, y:this.lastY, timeStamp:e.timeStamp});
  },

  step: function () {
    mainLoopStep(0);
  },
  /**
     * 生命周期函数--监听页面显示
     */
  onReady: function () {
    setInterval(this.step.bind(this), 16);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
