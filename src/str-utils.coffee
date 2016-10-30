wfUtils.Str.capitalize = (string)->
  return '' unless string?
  string = string.toString() unless typeof string == 'string'
  "#{string.charAt(0).toUpperCase()}#{string.slice(1)}"
wfUtils.Str.stripNull = (string)->
  return '' if typeof string == 'undefined'
  string.replace /\0/g, ''