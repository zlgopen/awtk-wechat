var gAsmModule = null;

function getAsmModule() {
  if(!gAsmModule) {
    var asm = require('awtk_asm.js')
    gAsmModule = asm.Module;
  }

  return gAsmModule;
}


