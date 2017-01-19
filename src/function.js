/**
 * Returns name of provided function
 * @param fun
 * @returns {*}
 */
Fun.getFunctionName = function(fun){
  let n;
  if ((n = fun.toString().match(/function+\s{1,}([a-zA-Z_0-9\$]*)/)) != null) { return n[1]; } else { return null; }
};
/**
 * Attempts to safely determine name of the Class Constructor returns null if undefined
 * @param fun
 * @returns {*}
 */
Fun.getConstructorName = function(fun){
  let _;
  if (fun.constructor.name === "Function") {
    fun = new fun();
  }
  if ((_ = this.getFunctionName(fun.constructor)) !== null) {
    return _;
  } else {
    return null; }
};
/**
 * Invokes a Constructor with optional arguments array
 * @param constructor
 * @param args
 */
Fun.construct = (constructor, args)=> new ( constructor.bind.apply(constructor, [null].concat(args)) );
/**
 * returns an arbitrary Function from array
 * @type {()}
 */
Fun.factory = Fun.construct.bind(null, Function);
/**
 * creates function from string (simple functions only -- does not support nesting)
 * @param string
 * @returns {*}
 */
Fun.fromString = function(string){
  var m = string.replace(/\n/g,'').replace(/[\s]{2,}/g, '');
  if ((m.match(/^function+[\s]{1,}[a-zA-Z0-9_]*\(([a-zA-Z0-9_\s,]*)\)+\s?\{+(.*)\}+$/) ) !== null) {
    return Fun.factory([].concat(m[1], m[2]));
  }
  let _ =  string.match(new RegExp(`^Native::(${( Object.keys(this.natives) ).join('|')})+$`));
  return _ !== null ? this.natives[_[1]] : null;
};
/**
 * Converts function to string, using encoding to handle native objects
 * (Simple functions only. Does not support nesting)
 * @param fun
 * @returns {*}
 */
Fun.toString = function(fun){
  let s;
  if (typeof fun !== 'function') { return fun; }
  if (((s = fun.toString()).match(/.*\[native code\].*/)) != null) {
    return `Native::${this.getFunctionName(fun)}`;
  } else {
    return s; }
}
/**
 *
 * @type {{Array: Array, ArrayBuffer: ArrayBuffer, Boolean: Boolean, Buffer: ArrayBuffer, Date: Date, Number: Number, Object: Object, String: String, Function: *}}
 */
Fun.natives = {
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
