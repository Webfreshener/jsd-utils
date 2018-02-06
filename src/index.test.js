/**
 tests invocation from package index
 **/
import {Fun, Str, Obj, exists} from '../index';
describe("invocation tests", () => {
    it("should have 'Fun'", () => {
        expect(typeof Fun).toBe('function');
    });
    it("should have 'Str'", () => {
        expect(typeof Str).toBe('function');
    });
    it("should have 'Obj'", () => {
        expect(typeof Obj).toBe('function');
    });
    it("should have 'exists'", () => {
        expect(typeof exists).toBe('function');
    });
});