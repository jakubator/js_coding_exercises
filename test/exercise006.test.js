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
      expect(sumMultiples([3,5])).toBe(8);
      expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
      expect(sumMultiples([3, 6, 9, 12, 5, 10, 15, 8])).toBe(60);
    });
  
    test("Should, return zero", () => {
      expect(sumMultiples([1, 4, 8])).toBe(0);
    });
 
  });

  describe("isValidDNA", () => {
    test("", () => {
      expect(isValidDNA([3,5])).toBe(8);
      expect(isValidDNA([5, 3, 7, 8, 1, 10])).toBe(18);
      expect(isValidDNA([3, 6, 9, 12, 5, 10, 15, 8])).toBe(60);
    });
  
    test("Should, return zero", () => {
      expect(isValidDNA([1, 4, 8])).toBe(0);
    });
 
  });