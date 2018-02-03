import {exists} from './index'
/**
 * @public
 */
export class Fun {
    /**
     * Returns name of provided function
     * @param fun
     * @returns {*}
     */
    static getFunctionName(fun) {
        let n = fun.toString().match(/function+\s{1,}([a-zA-Z_0-9\$]*)/);
        return (n !== null) ? n[1] : null
    }

    /**
     * Attempts to safely determine name of the Class Constructor returns null if undefined
     * @param fun
     * @returns {*}
     */
    static getConstructorName(fun) {
        if (fun.constructor.name === "Function") {
            fun = new fun();
        }
        if ((__ = this.getFunctionName(fun.constructor)) !== null) {
            return __;
        } else {
            return null;
        }
    }

    /**
     * Invokes a Constructor with optional arguments array
     * @param constructor
     * @param args
     */
    static construct(constructor, args) {
        return new ( constructor.bind.apply(constructor, [null].concat(args)) );
    }

    /**
     * returns an arbitrary Function from array
     * @returns {function(this:null)}
     */
    static get factory() {
        return Fun.construct.bind(null, Function)
    }

    /**
     * creates function from string (simple functions only -- does not support nesting)
     * @param string
     * @returns {*}
     */
    static fromString(string) {
        let m = string.replace(/\n/g, '').replace(/[\s]{2,}/g, '');
        if ((m = m.match(/^function+[\s]{1,}[a-zA-Z0-9_]*\(([a-zA-Z0-9_\s,]*)\)+\s?\{+(.*)\}+$/) ) !== null) {
            return Fun.factory([].concat(m[1], m[2]));
        }
        let __ = string.match(new RegExp(`^Native::(${( Object.keys(this.natives) ).join('|')})+$`));
        return __ !== null ? this.natives[__[1]] : null;
    };

    /**
     * Converts function to string, using encoding to handle native objects
     * (Simple functions only. Does not support nesting)
     * @param fun
     * @returns {*}
     */
    static toString(fun) {
        if (typeof fun !== 'function') {
            return fun;
        }
        let __ = null;
        if (((__ = fun.toString()).match(/.*\[native code\].*/)) != null) {
            return `Native::${this.getFunctionName(fun)}`;
        } else {
            return __;
        }
    };

    /**
     *
     * @returns {{Array: Array, ArrayBuffer: ArrayBuffer, Boolean: Boolean, Buffer: *, ArrayBuffer: ArrayBuffer, Date: Date, Number: Number, Object: Object, String: String, Function: *}}
     */
    static get natives() {
        return {
            Array,
            ArrayBuffer,
            Boolean,
            Buffer,
            ArrayBuffer,
            Date,
            Number,
            Object,
            String,
            Function
        };
    }
}
