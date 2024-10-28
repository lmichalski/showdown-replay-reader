import { Parser } from "../types";

type ParseDelimeter = (delimeter: string) => Parser<string>;

export const parseDelimeterToRest: ParseDelimeter = (d) => (s) =>
  s.indexOf(d) == -1
    ? { head: s, rest: "" }
    : {
        head: s.substring(0, s.indexOf(d)),
        rest: s.substring(s.indexOf(d)),
      };
