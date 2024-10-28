import { makeParsed } from "../functions/makeParsed";
import { takeNewline } from "../functions/takeLeadString";
import { Cell, Parser, ReplayLine, Subline } from "../types";
import { parseCell } from "./parseCell";
import { parseLineBody } from "./parseLineBody";
import { parseSublines } from "./parseSublines";

type ParseLine = Parser<ReplayLine>;

const parseLine: ParseLine = (s) => {
  const { head: label, rest: afterLabel } = parseCell(s);

  if (afterLabel == "") {
    return makeParsed(
      {
        label: label,
        cells: [],
        sublines: [],
      },
      afterLabel
    );
  }

  if (afterLabel == "\n") {
    const afterNewline = takeNewline(afterLabel);
    return makeParsed(
      {
        label: label,
        cells: [],
        sublines: [],
      },
      afterNewline
    );
  }

  const { head: lineBody, rest: afterBody } = parseLineBody(afterLabel);
  const afterNewline = takeNewline(afterBody);

  if (!afterNewline.startsWith("|-")) {
    return makeParsed(
      {
        label: label,
        cells: lineBody,
        sublines: [],
      },
      afterBody
    );
  }

  const { head: sublines, rest: afterSublines } = parseSublines(afterNewline);

  return makeParsed(
    {
      label: label,
      cells: lineBody,
      sublines: sublines,
    },
    afterSublines
  );
};
