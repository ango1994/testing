import { myPush } from "./myPush";

describe("Given the function myPush", () => {
    describe("When it is called when an array [1, 2, 3]", () => {
        test("Then it should return the new array length", () => {
            const arr = [1, 2, 3];
            const elementToPush = 4;
            const result = myPush(arr, elementToPush);
            const espectedResult = 4;
            expect(result).toBe(espectedResult);
        });
        test("Then it should return the new array length", () => {
            const arr = [1, 2, 3];
            const elementToPush = 4;
            myPush(arr, elementToPush);
            expect(arr).toStrictEqual([1, 2, 3, 4]);
        });
    });
});
