import { ParseDelimeter } from "./ParseDelimeter";

export const parseDelimeterToHead: ParseDelimeter = (d) => (s) =>
  s.indexOf(d) == -1
    ? { head: s, rest: "" }
    : {
        head: s.substring(0, s.indexOf(d) + d.length),
        rest: s.substring(s.indexOf(d) + d.length),
      };
