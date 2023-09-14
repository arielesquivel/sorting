describe("Split", function () {
  it("es capaz partir un arreglo por la mitad", function () {
    expect(split([2, 58, 65, 21, 5, 9])).toEqual([
      [2, 58, 65],
      [21, 5, 9],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(mergeSort([2, 58, 3, 99])).toEqual([2, 3, 58, 99]);
  });
});

it("mergeSort", function () {
  expect(mergeSort([4, 2, 5, 1, 6, 3])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(mergeSort([3, 8, 5])).toEqual([3, 5, 8]);
});
