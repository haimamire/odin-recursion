import { fib } from "../src/fib";

describe("fibonacci iteration", () => {
  test("should return 0", () => {
    expect(fib(1)).toEqual([0]);
  });
  test("should get first 2 digits", () => {
    expect(fib(2)).toEqual([0, 1]);
  });
  test("should get 3 first digits ", () => {
    expect(fib(3)).toEqual([0, 1, 1]);
  });
  test("should get 8 first digits ", () => {
    expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
