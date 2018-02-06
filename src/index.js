/**
 * @public
 */
import {Fun} from './function';
/**
 * @public
 */
import {Obj} from './object';
/**
 * @public
 */
import {Str} from './string';
/**
 * returns false if value is `null` or `undefined`
 * @public
 * @param value
 * @returns {boolean}
 */
const exists = (value) => {
    return typeof value !== 'undefined' && value !== null;
};

export default {
    Fun: Fun,
    Obj: Obj,
    Str: Str,
    exists: exists,
};
