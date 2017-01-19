/**
 * @author Van Carney <carney.van@gmail.com>
 * @licence MIT
 */
if ( typeof _global === "undefined") {
    var _global = typeof exports !== 'undefined' && exports !== null ? exports : window;
}
/**
 * initialize exports
 * @type {{Fun: *, Obj: *, Str: *, exists: ((value?))}}
 */
const Fun = {};
const Obj = {};
const Str = {};
//-- inject: function.js
//-- inject: object.js
//-- inject: string.js
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
