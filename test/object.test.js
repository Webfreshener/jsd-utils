"use strict";
import {should, expect} from "chai";
import {Obj} from "../lib/wf-utils";
should();
class MyObj {
    constructor() {

    }
}
describe("Object Utilities Tests", ()=> {
    it("should transform Object to Query String", ()=> {
        Obj.objectToQuery({name: 'test', value: 'foo'}).should.equal("name=test&value=foo");
    });
    it("should transform Query String to Object", ()=> {
        Obj.queryToObject("name=test&value=foo").name.should.equal("test");
    });
    it("should get typeof of Object", ()=> {
        Obj.getTypeOf([]).should.equal("Array");
    });
    it("should detect if Object object is of a particular type", ()=> {
        Obj.isOfType(new MyObj(), MyObj).should.be.true;
        Obj.isOfType([], Array).should.be.true;
    });
});