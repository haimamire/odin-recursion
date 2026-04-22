import { mergeSort } from "../src/merge";
const array = [1]
array.pop();
console.log(array[0] ?? "a")

describe("merge sort", () => {
  test("should return empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });
  test("should return same array", () => {
    expect(mergeSort([73])).toEqual([73]);
  });
  test("should return merged array", () => {
    expect(mergeSort([0, 3, 1, 4, 2])).toEqual([0, 1, 2, 3, 4]);
  });
  test("should sort array with duplicate value", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });
  test("should work with large numbers", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
