/**
 * @public
 */
export {Fun} from './function';
/**
 * @public
 */
export {Obj} from './object';
/**
 * @public
 */
export {String} from './string';

/**
 * returns false if value is `null` or `undefined`
 * @public
 * @param value
 * @returns {boolean}
 */
export const exists = (value) => {
    return typeof value !== 'undefined' && value !== null;
};
