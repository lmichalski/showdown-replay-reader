import { makeParsed } from "../functions/makeParsed";
import { Parser } from "../types";
import { parseCell } from "./parseCell";

type ParseLineBody = Parser<string[]>;

export const parseLineBody: ParseLineBody = (s) => {
  const { head: firstCell, rest: afterFirstCell } = parseCell(s);

  if (afterFirstCell == "" || afterFirstCell.startsWith("\n")) {
    return makeParsed([firstCell], afterFirstCell);
  }

  const { head: secondCell, rest: afterSecondCell } =
    parseLineBody(afterFirstCell);

  return makeParsed([firstCell].concat(secondCell), afterSecondCell);
};
