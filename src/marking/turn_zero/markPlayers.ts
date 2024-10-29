import { ReplayLine } from "../../types";

type MarkPlayers = (turnZeroLines: ReplayLine[]) => {
  p1: {
    name: string;
    avatar: string;
  };
  p2: {
    name: string;
    avatar: string;
  };
};

export const markPlayers: MarkPlayers = (turnZeroLines) => {
  const players = turnZeroLines.filter((line) => line["label"] == "player");

  if (players.length != 2) {
    throw new Error(
      `TurnZero should contain exactly two lines containing 'player': ${players}`
    );
  }

  const p1 = players.filter((p) => p["cells"][0] == "p1")[0];
  const p2 = players.filter((p) => p["cells"][0] == "p2")[0];

  return {
    p1: {
      name: p1["cells"][1],
      avatar: p1["cells"][2],
    },
    p2: {
      name: p2["cells"][1],
      avatar: p2["cells"][2],
    },
  };
};

// eg. |player|p1|Glumlee|wattson|
//
//   {
//     label: "player",
//     cells: ["p1", "Glumlee", "wattson", ""],
//     sublines: [],
//   },
//   {
//     label: "player",
//     cells: ["p2", "2n2plus", "doubleteam", ""],
//     sublines: [],
//   },
