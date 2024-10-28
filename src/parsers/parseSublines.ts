import { makeParsed } from "../functions/makeParsed";
import { Parser, Subline } from "../types";
import { parseSubline } from "./parseSubline";

type ParseSublines = Parser<Subline[]>;

export const parseSublines: ParseSublines = (s) => {
  const { head: firstLine, rest: afterFirstLine } = parseSubline(s);

  if (afterFirstLine == "" || !afterFirstLine.startsWith("|-")) {
    return makeParsed([firstLine], afterFirstLine);
  }

  const { head: nextLine, rest: afterNextLine } = parseSublines(afterFirstLine);

  return makeParsed([firstLine].concat(nextLine), afterNextLine);
};
