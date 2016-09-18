_global.wf.wfUtils.Str.capitalize = (string)->
  return '' unless string?
  "#{string.charAt(0).toUpperCase()}#{string.slice(1)}"
_global.wf.wfUtils.Str.stripNull = (string)->
  return '' if typeof string == 'undefined'
  string.replace /\0/g, ''