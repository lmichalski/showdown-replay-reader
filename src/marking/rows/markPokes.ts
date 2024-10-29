import { Poke, ReplayLine } from "../../types";
import { markPoke } from "./markPoke";

// EXAMPLE
// |poke|p1|Gouging Fire|

type MarkPokes = (turnZeroLines: ReplayLine[]) => {
  p1: {
    pokes: Poke[];
  };
  p2: {
    pokes: Poke[];
  };
};

export const markPokes: MarkPokes = (tz) => {
  const pokes = tz.filter((line) => line["label"] == "poke");

  if (pokes.length == 0) {
    throw new Error(
      `TurnZero should contain at least one line containing 'poke': ${tz}`
    );
  }

  const p1Pokes = pokes
    .filter((line) => line["cells"][0] == "p1")
    .map((poke) => markPoke(poke)["poke"]);

  const p2Pokes = pokes
    .filter((line) => line["cells"][0] == "p2")
    .map((poke) => markPoke(poke)["poke"]);

  return {
    p1: {
      pokes: p1Pokes,
    },
    p2: {
      pokes: p2Pokes,
    },
  };
};
