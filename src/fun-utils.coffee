#### getFunctionName(fun)
# Attempts to safely determine name of a named function returns null if undefined
_global.wf.wfUtils.Fun.getFunctionName = (fun)->
  if (n = fun.toString().match /function+\s{1,}([a-zA-Z_0-9\$]*)/)? then n[1] else null
#### getConstructorName(fun)
# Attempts to safely determine name of the Class Constructor returns null if undefined
_global.wf.wfUtils.Fun.getConstructorName = (fun)->
  fun = (fun() ? new fun) if fun.constructor.name is 'Function'
  if (name = @getFunctionName fun.constructor)? then name else null
#### construct(constructor, args)
# invokes a Constructor with optional arguments array
_global.wf.wfUtils.Fun.construct = (constructor, args)->
  new ( constructor.bind.apply constructor, [null].concat args )
#### factory(args)
# returns an arbitrary Function from array
_global.wf.wfUtils.Fun.factory = _global.wf.wfUtils.Fun.construct.bind null, Function
#### fromString(string)
# creates function from string (simple functions only -- does not support nesting)
_global.wf.wfUtils.Fun.fromString = (string)->
  if (m = string.replace(/\n/g,'').replace(/[\s]{2,}/g, '').match /^function+\s\(([a-zA-Z0-9_\s,]*)\)+\s?\{+(.*)\}+$/ )?
    return _global.wf.wfUtils.Fun.factory [].concat m[1], m[2]
  else
    return if (m = string.match new RegExp "^Native::(#{( Object.keys @natives ).join '|'})+$")? then @natives[m[1]] else null
#### toString(function)
# converts function to string, using encoding to handle native objects (simple functions only -- does not support nesting)
_global.wf.wfUtils.Fun.toString = (fun)->
  return fun if typeof fun != 'function'
  if ((s = fun.toString()).match /.*\[native code\].*/)? then "Native::#{@getFunctionName fun}" else s
_global.wf.wfUtils.Fun.natives =
  Array:Array
  ArrayBuffer:ArrayBuffer
  Boolean:Boolean
  Buffer:ArrayBuffer
  Date:Date
  Number:Number
  Object:Object
  String:String
  Function:Function