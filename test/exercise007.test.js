const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/exercise006");



  describe("findNextNumber", () => {
    test("returns the next number after the given number in the array", () => {
      expect(findNextNumber([5, 3, 7, 8, 1, 10], 7)).toBe(8);
      expect(findNextNumber([5, 3, 7, 8, 1, 10], 1)).toBe(10);
      expect(findNextNumber([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
    });
  
    test("if the number is not found in the array, returns null", () => {
      expect(findNextNumber([5, 3, 7, 8, 1, 10], 55)).toBe(null);
    });
  
    test("if the number is found more than once, returns the number after the first instance", () => {
      expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
    });
  
    test("if the number is found in the final index position of the array, returns null", () => {
      expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
    });
  });