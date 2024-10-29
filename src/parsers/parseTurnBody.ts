import { makeParsed } from "../functions/makeParsed";
import { Parser, ReplayLine } from "../types";
import { parseLine } from "./parseLine";

type ParseTurnBody = Parser<ReplayLine[]>;

export const parseTurnBody: ParseTurnBody = (s) => {
  const { head: firstLine, rest: afterFirstLine } = parseLine(s);

  if (afterFirstLine == "" || afterFirstLine.startsWith("|turn|")) {
    return makeParsed([firstLine], afterFirstLine);
  }

  const { head: nextLine, rest: afterNextLine } = parseTurnBody(afterFirstLine);

  return makeParsed([firstLine].concat(nextLine), afterNextLine);
};
