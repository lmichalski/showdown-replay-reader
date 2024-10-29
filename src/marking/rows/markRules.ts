import { ReplayLine } from "../../types";

// EXAMPLE
// |rule|Tera Type Preview: Tera Types are shown at Team Preview

type MarkRules = (turnZeroLines: ReplayLine[]) => {
  rule: string;
  description: string;
}[];

export const markRules: MarkRules = (turnZeroLines) => {
  const rules = turnZeroLines.filter((line) => line["label"] == "rule");

  if (rules.length == 0) {
    throw new Error(
      `TurnZero should contain at least one line containing 'rule': ${rules}`
    );
  }

  const formattedRules = rules.map((rule) => ({
    rule: rule.cells[0].split(": ")[0],
    description: rule.cells[0].split(": ")[1],
  }));

  return formattedRules;
};
