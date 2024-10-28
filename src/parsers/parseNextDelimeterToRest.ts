import { nextDelimeter } from "../functions/nextDelimeter";
import { parseDelimeterToRest } from "./parseDelimeter";

type ParseNextDelimeterToRest = (s: string) => {
  head: string;
  rest: string;
};

export const parseNextDelimeterToRest: ParseNextDelimeterToRest = (s) =>
  parseDelimeterToRest(nextDelimeter(s))(s);
