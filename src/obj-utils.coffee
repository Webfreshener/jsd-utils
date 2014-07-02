global = exports ? window
'use strict'
## Requires fun-utils
Fun = require 'fun-utils'
global.Obj = Obj = {}
#### getTypeOf(object)
# returns  name of Object type as string
Obj.getTypeOf = (obj)-> 
  Object.prototype.toString.call(obj).slice 8, -1
#### isOfType(object, kind)
# returns `boolean` based on object passed as object param matching  object passed as kind param
Obj.isOfType = (value, kind)->
  (@getTypeOf value) == (Fun.getFunctionName kind) or value instanceof kind
#### objectToQuery(object)
# Transforms Object to name value paired Query String
Obj.objectToQuery = (object={})->
  pairs = []
  keys  = Object.keys object
  for i in [0..(keys.length - 1)]
    pairs[i] = [keys[i], object[keys[i]]]
  (pairs.map (v,k) => v.join '=' ).join '&'
#### queryToObject(string)
# Transforms name value paired Query String to Object 
Obj.queryToObject = (string)->
  o={}
  decodeURIComponent(string).replace('?','').split('&').forEach (v,k)=> o[p[0]] = p[1] if (p = v.split '=').length == 2
  o