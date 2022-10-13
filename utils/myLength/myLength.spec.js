import { myLength } from "./myLength";

describe("Given the function myLength", () => {
    describe("When we pass an array [1, 2, 3]", () => {
        test("Then it should return the length of the array", () => {
            const arr = [1, 2, 3];
            const result = myLength(arr);
            const expectedResult = 3;
            expect(result).toBe(expectedResult);
        });
    });
});
