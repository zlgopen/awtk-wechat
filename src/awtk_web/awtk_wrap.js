function Awtk() {

}

Awtk.init = function () {
  Awtk._init = getAsmModule().cwrap('awtk_web_init', 'number', []);
  Awtk._deinit = getAsmModule().cwrap('awtk_web_deinit', 'number', []);
  Awtk._mainLoopStep = getAsmModule().cwrap('awtk_web_main_loop_step', 'number', ['number']);
  Awtk._requestRepaint = getAsmModule().cwrap('awtk_web_request_repaint', 'number', ['number']);

  Awtk._onImCommit = getAsmModule().cwrap('awtk_web_on_im_commit', 'number', ['string', 'number']);
  Awtk._onKeyDown = getAsmModule().cwrap('awtk_web_on_key_down', 'number', ['number', 'number']);
  Awtk._onKeyUp = getAsmModule().cwrap('awtk_web_on_key_up', 'number', ['number', 'number']);
  Awtk._onWheel = getAsmModule().cwrap('awtk_web_on_wheel', 'number', ['number', 'number']);

  Awtk._onPointerDown = getAsmModule().cwrap('awtk_web_on_pointer_down', 'number',
    ['number', 'number', 'number']);
  Awtk._onPointerMove = getAsmModule().cwrap('awtk_web_on_pointer_move', 'number',
    ['number', 'number', 'number']);
  Awtk._onPointerUp = getAsmModule().cwrap('awtk_web_on_pointer_up', 'number',
    ['number', 'number', 'number']);

  AssetsManager.preloadFonts();

  return Awtk._init();
}

Awtk.deinit = function () {
  return Awtk._deinit();
}

Awtk.run = function () {
  return Awtk._run();
}

Awtk.mainLoopStep = function (timestamp) {
  return Awtk._mainLoopStep(timestamp);
}

Awtk.requestRepaint = function (reason) {
  return Awtk._requestRepaint(reason);
}

Awtk.mainLoopStep = function (timestamp) {
  return Awtk._mainLoopStep(timestamp);
}

Awtk.onKeyDown = function (key, timestamp) {
  return Awtk._onKeyDown(key, timestamp);
}

Awtk.onKeyUp = function (key, timestamp) {
  return Awtk._onKeyUp(key, timestamp);
}

Awtk.onImCommit = function (text, timestamp) {
  return Awtk._onImCommit(text, timestamp);
}

Awtk.onWheel = function (delta, timestamp) {
  return Awtk._onWheel(delta, timestamp);
}

Awtk.onPointerDown = function (x, y, timestamp) {
  return Awtk._onPointerDown(x, y, timestamp);
}

Awtk.onPointerMove = function (x, y, timestamp) {
  return Awtk._onPointerMove(x, y, timestamp);
}

Awtk.onPointerUp = function (x, y, timestamp) {
  return Awtk._onPointerUp(x, y, timestamp);
}


