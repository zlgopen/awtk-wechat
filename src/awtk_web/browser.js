function TBrowser() { }

TBrowser.config = {
}

TBrowser.supportDirtyRect = function() {
  return false;
}

function TCanvas(name, w, h) {
  this.w = w;
  this.h = h;
  this.name = name;
  let ctx = wx.createCanvasContext(name);

  this.ctx = ctx;
  this.style = {width:w, height:h};
  this.ctx.beginFrame = function() {
    this.actions.length = 0; 
  }

  this.ctx.endFrame = function() {
    this.draw();
  }

  this.ctx.ellipse = function(x, y, rx, ry) {
    this.save();
    this.translate(x, y);
    this.scale(1, ry / rx);
    this.translate(-x, -y);
    this.beginPath();

    this.arc(
        /*xc =*/x,
        /*yc =*/y,
        /*radius =*/rx,
        /*angle1 =*/0,
        /*angle2 =*/2 * Math.PI);
   this.restore();
  }
}

TCanvas.prototype.getContext = function() {
  return this.ctx;
}

TBrowser.supportWebGL = function () {
  return false;
}

TBrowser.supportWebAssembly = function () {
  return false;
}

TBrowser.getDevicePixelRatio = function () {
  return TBrowser.ratio;
}

TBrowser.adjustCanvasToViewPort = function (canvas) {
  return true;
}

TBrowser.createCanvas = function (name, w, h) {
  var canvas = new TCanvas(name, w, h);

  return canvas;
}

TBrowser.createMainCanvas = function () {
  if (!TBrowser.mainCanvas) {
    TBrowser.mainCanvas = TBrowser.createCanvas("awtk-lcd", this.w, this.h);
  }

  return TBrowser.mainCanvas;
}

TBrowser.createFBO = function () {
  return TBrowser.createCanvas("awtk-lcd", this.w, this.h);
}


TBrowser.createAnimCanvas = function () {
  return TBrowser.createMainCanvas();;
}

TBrowser.activateCanvas = function (anim) {
  return true;
}

TBrowser.getActiveContext = function () {
  return TBrowser.mainCanvas.ctx;
}

TBrowser.createOfflineCanvas = function (name, w, h) {
  let canvas = wx.createOffscreenCanvas(w, h);
  canvas.name = name;
  
  return canvas;
}

TBrowser.createMutableImage = function (name, addr, w, h, line_length, format) {
  let canvas = wx.createOffscreenCanvas(name);

  return canvas;
}

TBrowser.getViewPort = function () {
  return {
    width: TBrowser.w,
    height: TBrowser.h
  };
}

TBrowser.updateDate = function () {
  TBrowser.date = new Date();
}

TBrowser.getFullYear = function () {
  return TBrowser.date.getFullYear();
}

TBrowser.getMonth = function () {
  return TBrowser.date.getMonth() + 1;
}

TBrowser.getDate = function () {
  return TBrowser.date.getDate();
}

TBrowser.getHours = function () {
  return TBrowser.date.getHours();
}

TBrowser.getMinutes = function () {
  return TBrowser.date.getMinutes();
}

TBrowser.getSeconds = function () {
  return TBrowser.date.getSeconds();
}

TBrowser.getDay = function () {
  return TBrowser.date.getDay();
}

TBrowser.getParam = function (name, defval) {
  let search = window.location.search;

  if (search) {
    let start = search.indexOf(name + '=');

    if (start >= 0) {
      start += name.length + 1;
      let str = search.substring(start);
      let end = str.indexOf('&');

      if (end >= 0) {
        str = str.substring(0, end);
      }

      return str;
    }
  }

  return defval;
}

TBrowser.init = function () {

  wx.getSystemInfo({
    success: function (res) {
      TBrowser.info = res;
      TBrowser.w = res.windowWidth;
      TBrowser.h = res.windowHeight;
      TBrowser.ratio = res.pixelRatio;
    }
  })

  return true;
}

TBrowser.loadAWTK = function () {
  //  TBrowser.loadScript('js/awtk.js');

  return true;
}

TBrowser.isMobile = function () {
  return true;
}

TBrowser.loadScript = function (url) {

  return true;
}

TBrowser.injectCSS = function (str) {

  return true;
}

TBrowser.loadFont = function (name, url) {
}

TBrowser.releaseFunction = function (funcID) {
  const RESERVED_FUNCTION_POINTERS = 1000;

  if (funcID > 0 && funcID < RESERVED_FUNCTION_POINTERS) {
    console.log('removeFunction:' + funcID);
    getAsmModule().removeFunction(funcID);
  } else {
    console.log('not js function:' + funcID);
  }

  return true;
}

