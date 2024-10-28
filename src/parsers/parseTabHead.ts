import { makeParsed } from "../functions/makeParsed";
import { Parser } from "../types";
import { parseLine } from "./parseLine";

type ParseTabHead = Parser<string>;

export const parseTabHead: ParseTabHead = (s) => {
  if (!s.startsWith("|t:|")) {
    return makeParsed(`none (generated: ${Date.now()})`, s);
  }

  const { head: firstLine, rest: afterFirstLine } = parseLine(s);

  return makeParsed(firstLine["cells"][0], afterFirstLine);
};
