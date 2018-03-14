"use strict";
import {Str} from './string';

describe("Str-Utils Tests", ()=> {
    it("should capitalize string", ()=> {
        expect(Str.capitalize("test")).toBe("Test");
    });
    it("should strip null characters", ()=> {
        expect(Str.stripNull("A\0Z").length).toBe(2);
    });
    it("should escape regexp special characters", ()=> {
        expect(Str.regexEscape("and period. and * and | and /"))
            .toBe("and period\\. and \\* and \\| and \\/");
    });
});
