import { temp2clothing } from "../temp2clothing.js";

describe("test temp2clothing", function () {
    it("tests -20 degrees celsius and 75% relative humidity", function () {
        let temperature = -20;
        let humidity = 75;
        let recommendation = temp2clothing(temperature, humidity);
        expect(recommendation).toBe("Chance of snow, wear waterproof jacket and snowboots");
    });

    it("tests 20 degrees celsius and 30% relative humidity", function () {
        let temperature = 20;
        let humidity = 30;
        let recommendation = temp2clothing(temperature, humidity);
        expect(recommendation).toBe("Short sleeves and shorts");
    });
});
