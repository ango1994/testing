import { myPop } from "./myPop";
Array.prototype.myPop = myPop;
describe("Given a function myPop", () => {
    describe("When it is called with an array [1, 2, 3, 4]", () => {
        test("Then it should return the last element of the array", () => {
            const arr = [1, 2, 3, 4];
            const espectedResult = 4;
            const result = arr.myPop();
            expect(result).toBe(espectedResult);
        });

        test("Then it should remove the last element", () => {
            const arr = [1, 2, 3, 4];
            const espectedResult = [1, 2, 3];
            arr.myPop();
            console.log(arr);
            expect(arr).toStrictEqual(espectedResult);
        });
    });
});
