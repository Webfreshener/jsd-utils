/**
 * @public
 */
export class Str {
    /**
     * @param string
     * @returns capitalized string
     */
    static capitalize(string) {
        if (string === null) {
            return "";
        }
        if (typeof string !== 'string') {
            string = string.toString();
        }
        return string.split(/[\s]{1,}/).map((_) => {
            return `${_.charAt(0).toUpperCase()}${_.slice(1)}`;
        }).join(" ");
    }

    /**
     *
     * @param string
     * @returns strng with null chars removed
     */
    static stripNull(string) {
        if (typeof string === 'undefined') {
            return '';
        }
        return string.replace(/\0/g, '');
    }

    /**
     * escapes all regexp special characters in string
     * @param string
     * @returns {void|string|*}
     */
    static regexEscape(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
};
