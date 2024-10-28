import { Parser, Subline } from "../types";
import { parseSubline } from "./parseSubline";

type ParseSublines = Parser<Subline[]>;

export const parseSublines: ParseSublines = (s) => {
  const { head: firstLine, rest: afterFirstLine } = parseSubline(s);

  if (afterFirstLine == "" || !afterFirstLine.startsWith("|-")) {
    return {
      head: [firstLine],
      rest: afterFirstLine,
    };
  }

  const { head: nextLine, rest: afterNextLine } = parseSublines(afterFirstLine);

  return {
    head: [firstLine].concat(nextLine),
    rest: afterNextLine,
  };
};
