"use strict";
import {should, expect} from "chai";
import {Str} from "./build";
should();
describe("Str-Utils Tests", ()=>{
    it("should capitalize string", ()=>{
        Str.capitalize("test").should.eq("Test");
    });
    it("should strip null characters", ()=>{
        Str.stripNull("A\0Z").length.should.eq(2);
    });
});
