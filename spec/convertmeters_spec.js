import { meters2yards } from "../meters2yards.js";

describe("test meters2yards", function () {
    it("tests 30 m", function () {
        let meters = 30;
        let yards = meters2yards(meters);
        expect(yards.toFixed(2)).toBe("32.82");
    });

    it("tests 45 m", function () {
        let meters = 45;
        let yards = meters2yards(meters);
        expect(yards.toFixed(2)).toBe("49.23");
    });

}); 
