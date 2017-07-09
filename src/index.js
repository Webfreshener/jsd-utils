const _o = {};
_o.Fun = require('./function');
_o.Obj = require('./object');
_o.Str = require('./string');
_o.exists = function(value) {
    return typeof value !== 'undefined' && value !== null;
};
// function exists(value) {
//     return typeof value !== 'undefined' && value !== null;
// };
module.exports = _o;