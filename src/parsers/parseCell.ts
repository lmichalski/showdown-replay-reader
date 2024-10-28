import { takePipe } from "../functions/takeLeadString";
import { Cell, Parser } from "../types";
import { parseNextDelimeterToRest } from "./parseNextDelimeterToRest";
import { makeParsed } from "../functions/makeParsed";

type ParseCell = Parser<Cell>;

export const parseCell: ParseCell = (s) => {
  if (!s.startsWith("|")) {
    throw new Error("Ceci n'est pas une pipe: " + s);
  }

  if (s == "|") {
    return makeParsed("|", "");
  }

  const afterPipe = takePipe(s);

  const { head: cell, rest: afterCell } = parseNextDelimeterToRest(afterPipe);

  return makeParsed(cell, afterCell);
};
