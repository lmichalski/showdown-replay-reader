import { Parser, Tab } from "../types";
import { parseTab } from "./parseTab";

type ParseReplay = Parser<Tab[]>;

export const parseReplay: ParseReplay = (s) => {
  const { head: firstTab, rest: afterFirstTab } = parseTab(s);

  if (afterFirstTab == "") {
    return {
      head: [firstTab],
      rest: afterFirstTab,
    };
  }

  const { head: secondTab, rest: afterSecondTab } = parseReplay(afterFirstTab);

  return {
    head: [firstTab].concat(secondTab),
    rest: afterSecondTab,
  };
};
