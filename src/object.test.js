"use strict";
import {Obj} from "./object";

class MyObj {
    constructor() {

    }
}
describe("Object Utilities Tests", ()=> {
    it("should transform Object to Query String", ()=> {
        expect(Obj.objectToQuery({name: 'test', value: 'foo'})).toBe("name=test&value=foo");
    });
    it("should transform Query String to Object", ()=> {
        expect(Obj.queryToObject("name=test&value=foo").name).toBe("test");
    });
    it("should get typeof of Object", ()=> {
        expect(Obj.getTypeOf([])).toBe("Array");
    });
    it("should detect if Object object is of a particular type", ()=> {
        expect(Obj.isOfType(new MyObj(), MyObj)).toBe(true);
        expect(Obj.isOfType([], Array)).toBe(true);
    });
});