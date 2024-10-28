import { makeParsed } from "../functions/makeParsed";
import { Parser, ReplayLine } from "../types";
import { parseLine } from "./parseLine";

type ParseTabBody = Parser<ReplayLine[]>;

export const parseTabBody: ParseTabBody = (s) => {
  const { head: firstLine, rest: afterFirstLine } = parseLine(s);

  if (afterFirstLine == "" || afterFirstLine.startsWith("|t:|")) {
    return makeParsed([firstLine], afterFirstLine);
  }

  const { head: nextLine, rest: afterNextLine } = parseTabBody(afterFirstLine);

  return makeParsed([firstLine].concat(nextLine), afterNextLine);
};
