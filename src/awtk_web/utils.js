function pointerToString(pointer) {
  if(typeof pointer === 'string') {
    return pointer;
  } else if(getAsmModule() && getAsmModule().UTF8ToString) {
    return pointer && getAsmModule().UTF8ToString(pointer, 1024) || null;
  } else {
    return pointer;
  }
}
