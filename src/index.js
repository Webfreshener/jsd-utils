let wfUtils;
if (_global == null) { var _global = typeof exports !== 'undefined' && exports !== null ? exports : window; }
_global.wfUtils = wfUtils = { 
  Fun: {},
  Obj: {},
  Str: {},
  exists(value){ 
    return (typeof value !== 'undefined') && value !== null;
  }
};
'{{classes}}';
