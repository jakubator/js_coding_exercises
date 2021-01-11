const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");


describe("sumMultiples", () => {
  test("Check sum of multiples. Testing valid and partially valid arrays", () => {
    expect(sumMultiples([3, 5])).toBe(8);
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([3, 6, 9, 12, 5, 10, 15, 8])).toBe(60);
  });

  test("Should, return zero", () => {
    expect(sumMultiples([1, 4, 8])).toBe(0);
  });

});

describe("isValidDNA", () => {
  test("Checking true false conditions C, G, T or A only", () => {
    expect(isValidDNA("cgta")).toBe(true);
    expect(isValidDNA("Gstring")).toBe(false);
    expect(isValidDNA("GA,")).toBe(false);
    expect(isValidDNA("GA")).toBe(true);
  });

});

describe("getComplementaryDNA", () => {
  test("Check sum of multiples. Testing valid and partially valid arrays", () => {
    expect(getComplementaryDNA("ACTG")).toEqual("TGAC");
  });
});

describe("isItPrime", () => {
  test("Check if number is prime", () => {
    expect(isItPrime("7")).toBe(true);
    expect(isItPrime("4")).toBe(false);
    expect(isItPrime("11")).toBe(true);
    expect(isItPrime("3")).toBe(true);
    expect(isItPrime("6")).toBe(false);

  });
});

describe("createMatrix", () => {
  test("Compare arrays", () => {
    expect(createMatrix(3, "foo")).toStrictEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
    expect(createMatrix(1, "foo")).toStrictEqual([["foo"]]);
  });
});

describe("areWeCovered", () => {
  test("No coverage", () => {
    expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday"] },
    { name: "Jake", rota: ["Monday", "Tuesday"] },
    { name: "Jordan", rota: ["Tuesday"] }
    ], "Monday")).toBe(false);
  });

  test("Covered", () => {
    expect(areWeCovered([{ name: "Sally", rota: ["Saturday", "Tuesday"] },
    { name: "Jake", rota: ["Monday", "Saturday"] },
    { name: "Jordan", rota: ["Saturday"] }
    ], "Saturday")).toBe(true);
  });
});
