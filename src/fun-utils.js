//### getFunctionName(fun)
// Attempts to safely determine name of a named function returns null if undefined
wfUtils.Fun.getFunctionName = function(fun){
  let n;
  if ((n = fun.toString().match(/function+\s{1,}([a-zA-Z_0-9\$]*)/)) != null) { return n[1]; } else { return null; }
};
//### getConstructorName(fun)
// Attempts to safely determine name of the Class Constructor returns null if undefined
wfUtils.Fun.getConstructorName = function(fun){
  let name;
  if (fun.constructor.name === 'Function') { let left;
  fun = ((left = fun()) != null ? left : new fun); }
  if ((name = this.getFunctionName(fun.constructor)) != null) { return name; } else { return null; }
};
//### construct(constructor, args)
// invokes a Constructor with optional arguments array
wfUtils.Fun.construct = (constructor, args)=> new ( constructor.bind.apply(constructor, [null].concat(args)) );
//### factory(args)
// returns an arbitrary Function from array
wfUtils.Fun.factory = wfUtils.Fun.construct.bind(null, Function);
//### fromString(string)
// creates function from string (simple functions only -- does not support nesting)
wfUtils.Fun.fromString = function(string){
  let m;
  if ((m = string.replace(/\n/g,'').replace(/[\s]{2,}/g, '').match(/^function+\s\(([a-zA-Z0-9_\s,]*)\)+\s?\{+(.*)\}+$/) ) != null) {
    return wfUtils.Fun.factory([].concat(m[1], m[2]));
  } else {
    return ((m = string.match(new RegExp(`^Native::(${( Object.keys(this.natives) ).join('|')})+$`))) != null) ? this.natives[m[1]] : null;
  }
};
//### toString(function)
// converts function to string, using encoding to handle native objects (simple functions only -- does not support nesting)
wfUtils.Fun.toString = function(fun){
  let s;
  if (typeof fun !== 'function') { return fun; }
  if (((s = fun.toString()).match(/.*\[native code\].*/)) != null) { return `Native::${this.getFunctionName(fun)}`; } else { return s; }
};
wfUtils.Fun.natives = {
  Array,
  ArrayBuffer,
  Boolean,
  Buffer:ArrayBuffer,
  Date,
  Number,
  Object,
  String,
  Function
};