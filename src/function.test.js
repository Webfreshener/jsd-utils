"use strict";
import {Fun} from './function';

class Funct {
    constructor() {
    }
}

describe("Function Utility Tests", () => {
    let str = null;
    let fun = (foo,bar)=>{
        console.log(`${foo} ${bar}`);
    }
    it("should stringify a function", () => {
        str = Fun.toString(fun).replace(/[\n\t]*/g, "").replace(/[\s]{2,}/g, " ");
        expect(str).toBe("function fun(foo, bar) { console.log(\"\".concat(foo, \" \").concat(bar)); }");
    });
    it("should revive a function from a string", () => {
        expect(typeof Fun.fromString(str)).toBe("function");
    });
    it("should encode a Native Object", () => {
        expect(Fun.toString(Date)).toBe("Native::Date");
    });
    it("should create a Native Object from reference", () => {
        expect(Fun.fromString("Native::Date")).toBe(Date);
    });
    it("should get the constructor name", ()=>{
        expect(Fun.getConstructorName(new Funct)).toBe("Funct");
        expect(Fun.getConstructorName(Funct)).toBe("Funct");
        expect(Fun.getConstructorName(Number)).toBe("Number");
    });
    it("should exec a Constructor", () => {
        const str = Fun.construct( Date, "5/Nov/1605" ).toString();
        const m = str.match(/Sat\sNov\s05\s1605\s00\:00\:00\sGMT+/);
        expect(m !== null).toBe(true);
    });
    it("should get a function name", ()=>{
        function testing() {}
        expect(Fun.getFunctionName(testing)).toBe("testing");
    });
    it("should create and exec a Function", ()=>{
        expect(Fun.factory(["a,b", "return a + b"])(2,2)).toBe(4);
    });
});
