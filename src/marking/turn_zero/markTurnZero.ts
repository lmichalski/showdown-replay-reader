import { Poke, ReplayLine } from "../../types";
import { markGametype, markGen, markTier } from "./markNonduplicateRowLabel";
import { markPlayersAndPokes } from "./markPlayersAndPokes";
import { markPokes } from "./markPokes";
import { markRules } from "./markRules";

type MarkTurnZero = (tz: ReplayLine[]) => {
  gametype: {
    value: string;
  };
  players: {
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
  gen: {
    value: string;
  };
  tier: {
    value: string;
  };
  rules: {
    rule: string;
    description: string;
  }[];
};

export const markTurnZero: MarkTurnZero = (tz) => {
  const gametype = markGametype(tz);
  const players = markPlayersAndPokes(tz);
  const gen = markGen(tz);
  const tier = markTier(tz);
  const rules = markRules(tz);

  return {
    gametype,
    players,
    gen,
    tier,
    rules,
  };
};
