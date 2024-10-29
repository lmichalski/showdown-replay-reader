import { ReplayLine } from "../../types";

type MarkNonduplicateRowLabel = (label: string) => (
  turnZeroLines: ReplayLine[]
) => {
  value: string;
};

export const markNonduplicateSingleCellRowLabel: MarkNonduplicateRowLabel =
  (label) => (tz) => {
    const filtered = tz.filter((line) => line["label"] == label);

    if (filtered.length != 1) {
      throw new Error(
        `TurnZero should contain exactly one line containing '${label}': ${label}`
      );
    }

    return { value: filtered[0]["cells"][0] };
  };

// Gametype
// eg. |gametype|singles
export const markGametype = markNonduplicateSingleCellRowLabel("gametype");

// Gen
// eg. |gen|9
export const markGen = markNonduplicateSingleCellRowLabel("gen");

// Tier
// eg. |tier|[Gen 9] Tera Preview NatDex Draft
export const markTier = markNonduplicateSingleCellRowLabel("tier");

//
