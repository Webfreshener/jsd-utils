/**
 * @author Van Carney <carney.van@gmail.com>
 * @licence MIT
 */
if (typeof _global === "undefined") {
  var _global = typeof exports !== 'undefined' && exports !== null ? exports : window;
}
/**
 * initialize exports
 * @type {{Fun: *, Obj: *, Str: *, exists: ((value?))}}
 */
var Fun = {};
var Obj = {};
var Str = {};
/**
 * Returns name of provided function
 * @param fun
 * @returns {*}
 */
Fun.getFunctionName = function (fun) {
  var n = void 0;
  if ((n = fun.toString().match(/function+\s{1,}([a-zA-Z_0-9\$]*)/)) != null) {
    return n[1];
  } else {
    return null;
  }
};
/**
 * Attempts to safely determine name of the Class Constructor returns null if undefined
 * @param fun
 * @returns {*}
 */
Fun.getConstructorName = function (fun) {
  var _ = void 0;
  if (fun.constructor.name === "Function") {
    fun = new fun();
  }
  if ((_ = this.getFunctionName(fun.constructor)) !== null) {
    return _;
  } else {
    return null;
  }
};
/**
 * Invokes a Constructor with optional arguments array
 * @param constructor
 * @param args
 */
Fun.construct = function (constructor, args) {
  return new (constructor.bind.apply(constructor, [null].concat(args)))();
};
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
Fun.fromString = function (string) {
  var m = string.replace(/\n/g, '').replace(/[\s]{2,}/g, '');
  if (m.match(/^function+[\s]{1,}[a-zA-Z0-9_]*\(([a-zA-Z0-9_\s,]*)\)+\s?\{+(.*)\}+$/) !== null) {
    return Fun.factory([].concat(m[1], m[2]));
  }
  var _ = string.match(new RegExp("^Native::(" + Object.keys(this.natives).join('|') + ")+$"));
  return _ !== null ? this.natives[_[1]] : null;
};
/**
 * Converts function to string, using encoding to handle native objects
 * (Simple functions only. Does not support nesting)
 * @param fun
 * @returns {*}
 */
Fun.toString = function (fun) {
  var s = void 0;
  if (typeof fun !== 'function') {
    return fun;
  }
  if ((s = fun.toString()).match(/.*\[native code\].*/) != null) {
    return "Native::" + this.getFunctionName(fun);
  } else {
    return s;
  }
};
/**
 *
 * @type {{Array: Array, ArrayBuffer: ArrayBuffer, Boolean: Boolean, Buffer: ArrayBuffer, Date: Date, Number: Number, Object: Object, String: String, Function: *}}
 */
Fun.natives = {
  Array: Array,
  ArrayBuffer: ArrayBuffer,
  Boolean: Boolean,
  Buffer: ArrayBuffer,
  Date: Date,
  Number: Number,
  Object: Object,
  String: String,
  Function: Function
};
/**
 * returns  name of Object type as string
 * @param obj
 */
Obj.getTypeOf = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};
/**
 * returns `boolean` based on object passed as object param matching  object passed as kind param
 * @param value
 * @param kind
 * @returns {boolean}
 */
Obj.isOfType = function (value, kind) {
  return this.getTypeOf(value) === Fun.getFunctionName(kind) || value instanceof kind;
};
/**
 * Transforms Object to name value paired Query String
 * @param object
 * @returns {string}
 */
Obj.objectToQuery = function () {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var pairs = [];
  var keys = Object.keys(object);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = __range__(0, keys.length - 1, true)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      pairs[i] = [keys[i], object[keys[i]]];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return pairs.map(function (v, k) {
    return v.join('=');
  }).join('&');
};
/**
 * Transforms name value paired Query String to Object
 * @param string
 * @returns {{}}
 */
Obj.queryToObject = function (string) {
  var o = {};
  decodeURIComponent(string).replace('?', '').split('&').forEach(function (v, k) {
    var p = void 0;
    if ((p = v.split('=')).length === 2) {
      return o[p[0]] = p[1];
    }
  });
  return o;
};
function __range__(left, right, inclusive) {
  var range = [];
  var ascending = left < right;
  var end = !inclusive ? right : ascending ? right + 1 : right - 1;
  for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
}
/**
 * @param string
 * @returns capitalized string
 */
Str.capitalize = function (string) {
  if (string === null) {
    return "";
  }
  if (typeof string !== 'string') {
    string = string.toString();
  }
  return string.split(/[\s]{1,}/).map(function (_) {
    return "" + _.charAt(0).toUpperCase() + _.slice(1);
  }).join(" ");
};
/**
 *
 * @param string
 * @returns strng with null chars removed
 */
Str.stripNull = function (string) {
  if (typeof string === 'undefined') {
    return '';
  }
  return string.replace(/\0/g, '');
};
/**
 * initialize exports
 * @type {{Fun: *, Obj: *, Str: *, exists: ((value?))}}
 */
_global.Fun = Fun;
_global.Obj = Obj;
_global.Str = Str;
_global.exists = function exists(value) {
  return typeof value !== 'undefined' && value !== null;
};