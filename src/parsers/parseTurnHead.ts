import { makeParsed } from "../functions/makeParsed";
import { Parser } from "../types";
import { parseLine } from "./parseLine";

type ParseTurnHead = Parser<string>;

export const parseTurnHead: ParseTurnHead = (s) => {
  if (!s.startsWith("|turn|")) {
    return makeParsed("0", s);
  }

  const { head: turnHead, rest: afterFirstLine } = parseLine(s);

  return makeParsed(turnHead["cells"][0], afterFirstLine);
};
