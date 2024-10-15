import { ParseDelimeter } from "./ParseDelimeter";

export const parseDelimeterDestructive: ParseDelimeter = (d) => (s) =>
  s.indexOf(d) == -1
    ? { head: s, rest: "" }
    : {
        head: s.substring(0, s.indexOf(d)),
        rest: s.substring(s.indexOf(d) + d.length),
      };
