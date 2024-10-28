import { makeParsed } from "../functions/makeParsed";
import { Parser, Tab } from "../types";
import { parseTabBody } from "./parseTabBody";
import { parseTabHead } from "./parseTabHead";

type ParseTab = Parser<Tab>;

export const parseTab: ParseTab = (s) => {
  const { head: tabHead, rest: afterHead } = parseTabHead(s);

  const { head: tabBody, rest: afterBody } = parseTabBody(afterHead);

  return makeParsed(
    {
      t: tabHead,
      lines: tabBody,
    },
    afterBody
  );
};
