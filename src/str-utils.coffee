Str.capitalize = (string)->
  return '' unless string?
  "#{string.charAt(0).toUpperCase()}#{string.slice(1)}"
Str.stripNull = (string)->
  return '' if typeof string == 'undefined'
  string.replace /\0/g, ''