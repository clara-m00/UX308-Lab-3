import { cubeVolume } from "../cubeVolume.js";

describe("test cubeVolume", function () {
    it("tests edge length of 25 m", function () {
        let edgeLength = 25;
        let volume = cubeVolume(edgeLength);

        expect(volume).toBe(15625);
    });

    it("tests edge length of 40 m", function () {
        let edgeLength = 40;
        let volume = cubeVolume(edgeLength);

        expect(volume).toBe(64000);
    });
}); 
