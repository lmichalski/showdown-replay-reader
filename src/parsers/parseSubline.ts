import { parseCell } from "./parseCell";
import { takeNewline } from "../functions/takeLeadString";
import { Parser } from "../types";
import { parseLineBody } from "./parseLineBody";

type ParseSubLine = Parser<{
  label: string;
  body: string[];
}>;

export const parseSubline: ParseSubLine = (s) => {
  if (!s.startsWith("|-")) {
    throw new Error("not a subline. " + s);
  }

  const { head: label, rest: afterLabel } = parseCell(s);

  if (afterLabel == "") {
    return {
      head: {
        label: label,
        body: [],
        sublines: [],
      },
      rest: afterLabel,
    };
  }

  if (afterLabel.startsWith("\n")) {
    const afterBody = takeNewline(afterLabel);
    return {
      head: {
        label: label,
        body: [],
        sublines: [],
      },
      rest: afterBody,
    };
  }

  const { head: lineBody, rest: afterLineBody } = parseLineBody(afterLabel);
  const afterBody = takeNewline(afterLineBody);

  return {
    head: {
      label: label,
      body: lineBody,
    },
    rest: afterBody,
  };
};
