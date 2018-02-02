import {Fun} from './function';
/**
 *
 * @param left
 * @param right
 * @param inclusive
 * @returns {Array}
 * @private
 */
const __range__ = (left, right, inclusive) => {
    let range = [];
    let ascending = left < right;
    let end = !inclusive ? right : ascending ? right + 1 : right - 1;
    for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
    }
    return range;
};

/**
 * @public
 */
export class Obj {
    /**
     * returns  name of Object type as string
     * @param obj
     */
    static getTypeOf(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    }
    /**
     * returns `boolean` based on object passed as object param matching  object passed as kind param
     * @param value
     * @param kind
     * @returns {boolean}
     */
    static isOfType(value, kind) {
        return (this.getTypeOf(value)) === (Fun.getFunctionName(kind)) || value instanceof kind;
    }

    /**
     * Transforms Object to name value paired Query String
     * @param object
     * @returns {string}
     */
    static objectToQuery(object = {})  {
        let pairs = [];
        let keys = Object.keys(object);
        for (let i of __range__(0, (keys.length - 1), true)) {
            pairs[i] = [keys[i], object[keys[i]]];
        }
        return (pairs.map((v, k) => v.join('=')) ).join('&');
    }
    /**
     * Transforms name value paired Query String to Object
     * @param string
     * @returns {{}}
     */
    static queryToObject(string) {
        let o = {};
        decodeURIComponent(string).replace('?', '').split('&').forEach((v, k) => {
            let p;
            if ((p = v.split('=')).length === 2) {
                return o[p[0]] = p[1];
            }
        });
        return o;
    }
}
