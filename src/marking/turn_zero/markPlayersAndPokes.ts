import { Poke, ReplayLine } from "../../types";
import { markPlayers } from "./markPlayers";
import { markPokes } from "./markPokes";

type MarkPlayersAndPokes = (turnZeroLines: ReplayLine[]) => {
  p1: {
    name: string;
    avatar: string;
    pokes: Poke[];
  };
  p2: {
    name: string;
    avatar: string;
    pokes: Poke[];
  };
};

export const markPlayersAndPokes: MarkPlayersAndPokes = (tz) => {
  const { p1: player1, p2: player2 } = markPlayers(tz);
  const { p1: pokes1, p2: pokes2 } = markPokes(tz);

  return {
    p1: {
      name: player1["name"],
      avatar: player1["avatar"],
      pokes: pokes1["pokes"],
    },
    p2: {
      name: player2["name"],
      avatar: player2["avatar"],
      pokes: pokes2["pokes"],
    },
  };
};
