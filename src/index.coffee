'use strict'
_global = exports ? window unless _global?
_global.wfUtils = wfUtils = 
  Fun: {}
  Obj: {}
  Str: {}
  exists: (value)-> 
    (typeof value != 'undefined') && value != null
'{{classes}}'
