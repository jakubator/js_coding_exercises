const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/exercise007");

  describe("checkWinners", () => {
    test("Diagonal 1", () => {
      const board =
        [
          ["X", "X", "R"],
          ["X", "X", "0"],
          ["N", null, "X"]
        ]; expect(findWinner(board)).toBe("X");
    });

    test("Diagonal 2", () => {
      const board1 =
      [
        ["X", "0", "0"],
        ["X", "0", "X"],
        ["0", null, null]
      ]; expect(findWinner(board1)).toBe("0");
    });
    test("Row 2", () => {

      const board2 =
      [
        ["X", "0", "0"],
        ["X", "X", "X"],
        ["0", null, null]
      ]; expect(findWinner(board2)).toBe("X");
    });

    test("Null", () => {
      const board3 =
      [
        ["X", "0", "0"],
        ["X", "R", "X"],
        ["0", null, null]
      ]; expect(findWinner(board3)).toBe(null);
    });

    test("Column 1", () => {
      const board3 =
      [
        ["X", "0", "0"],
        ["X", "R", "X"],
        ["X", null, null]
      ]; expect(findWinner(board3)).toBe("X");
    });

  });

