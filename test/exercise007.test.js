const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");


describe("sumDigits", () => {

  test("Summing up the digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(444)).toBe(12);
    expect(sumDigits(1)).toBe(1);
    expect(sumDigits(0)).toBe(0);
  });

});

describe("createRange", () => {

  test("Created ranges check", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(3, 11, 3)).toEqual([3, 6, 9]);
    expect(createRange(3, 9, 1)).toEqual([3, 4, 5, 6, 7, 8, 9]);
  });

});

describe("hexToRGB", () => {
  test("Transform hex to RGB, check", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#00ff00")).toBe("rgb(0,255,0)");
    expect(hexToRGB("#1234ff")).toBe("rgb(18,52,255)");
  });
});

describe("getScreentimeAlertList", () => {
  test("Addiction test", () => {
    expect(getScreentimeAlertList(
      [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
          ]
        },
      ], "2019-05-04")).toEqual(["beth_1234"]);

  });
});

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

