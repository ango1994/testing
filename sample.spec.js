import { add } from "./sample";

describe("Testing Add", () => {
    test("If 2 and 2", () => {
        expect(add(2, 2)).toBe(4);
    });
});
