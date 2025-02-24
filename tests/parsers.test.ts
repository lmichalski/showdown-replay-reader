import { parseCell } from "../src/parsers/parseCell";

var cell0 = "|";
var cell1 = "|alpha";
var cell2 = "|alpha|bravo";
var cell3 = "|alpha\n";

describe("testing base unit behaviour", () => {
  test("baseAtk should be 1", () => {
    expect(parseCell(cell0)).toBe(1);
  });
});
