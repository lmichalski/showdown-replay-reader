import { parseCell } from "./parseCell";
import { takeNewline } from "../functions/takeLeadString";
import { Cell, Parser, Subline } from "../types";
import { parseLineBody } from "./parseLineBody";
import { makeParsed } from "../functions/makeParsed";

type ParseSubLine = Parser<Subline>;

export const parseSubline: ParseSubLine = (s) => {
  if (!s.startsWith("|-")) {
    throw new Error("not a subline. " + s);
  }

  const { head: label, rest: afterLabel } = parseCell(s);

  if (afterLabel == "") {
    return makeParsed({ label: label, cells: [] }, afterLabel);
  }

  if (afterLabel.startsWith("\n")) {
    const afterNewline = takeNewline(afterLabel);
    return makeParsed({ label: label, cells: [] }, afterNewline);
  }

  const { head: body, rest: afterBody } = parseLineBody(afterLabel);
  const afterNewline = takeNewline(afterBody);

  return makeParsed({ label: label, cells: body }, afterNewline);
};
