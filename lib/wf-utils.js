(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wfUtils"] = factory();
	else
		root["wfUtils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	const _o = {};
	_o.Fun = __webpack_require__(1);
	_o.Obj = __webpack_require__(2);
	_o.Str = __webpack_require__(3);
	_o.exists = function(value) {
	    return typeof value !== 'undefined' && value !== null;
	};
	// function exists(value) {
	//     return typeof value !== 'undefined' && value !== null;
	// };
	module.exports = _o;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	const Fun = {};
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

	module.exports = Fun;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	const Fun = __webpack_require__(1);
	const Obj = {};
	/**
	 * returns  name of Object type as string
	 * @param obj
	 */
	Obj.getTypeOf = obj=> Object.prototype.toString.call(obj).slice(8, -1);
	/**
	 * returns `boolean` based on object passed as object param matching  object passed as kind param
	 * @param value
	 * @param kind
	 * @returns {boolean}
	 */
	Obj.isOfType = function(value, kind){
	  return (this.getTypeOf(value)) === (Fun.getFunctionName(kind)) || value instanceof kind;
	};
	/**
	 * Transforms Object to name value paired Query String
	 * @param object
	 * @returns {string}
	 */
	Obj.objectToQuery = function(object={}){
	  let pairs = [];
	  let keys  = Object.keys(object);
	  for (let i of __range__(0, (keys.length - 1), true)) {
	    pairs[i] = [keys[i], object[keys[i]]];
	  }
	  return (pairs.map((v,k) => v.join('=')) ).join('&');
	};
	/**
	 * Transforms name value paired Query String to Object
	 * @param string
	 * @returns {{}}
	 */
	Obj.queryToObject = function(string){
	  let o={};
	  decodeURIComponent(string).replace('?','').split('&').forEach((v,k)=> { let p;
	  if ((p = v.split('=')).length === 2) { return o[p[0]] = p[1]; } });
	  return o;
	};
	function __range__(left, right, inclusive) {
	  let range = [];
	  let ascending = left < right;
	  let end = !inclusive ? right : ascending ? right + 1 : right - 1;
	  for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
	    range.push(i);
	  }
	  return range;
	}

	module.exports = Obj;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	const Str = {};

	/**
	 * @param string
	 * @returns capitalized string
	 */
	Str.capitalize = function(string){
	  if (string === null) { return ""; }
	  if (typeof string !== 'string') { string = string.toString(); }
	  return string.split(/[\s]{1,}/).map((_)=>{
	    return `${_.charAt(0).toUpperCase()}${_.slice(1)}`;
	  }).join(" ");
	};
	/**
	 *
	 * @param string
	 * @returns strng with null chars removed
	 */
	Str.stripNull = function(string){
	  if (typeof string === 'undefined') { return ''; }
	  return string.replace(/\0/g, '');
	};

	module.exports = Str;

/***/ })
/******/ ])
});
;