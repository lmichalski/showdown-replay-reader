import { Poke, ReplayLine } from "../../types";
import {
  markGametype,
  markGen,
  markTier,
} from "../rows/markNonduplicateRowLabel";
import { markPlayers } from "../rows/markPlayers";
import { markPokes } from "../rows/markPokes";
import { markRules } from "../rows/markRules";

type MarkTurnZero = (tz: ReplayLine[]) => {
  gametype: {
    value: string;
  };
  players: {
    p1: {
      name: string;
      avatar: string;
    };
    p2: {
      name: string;
      avatar: string;
    };
  };
  pokes: {
    p1: { pokes: Poke[] };
    p2: { pokes: Poke[] };
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

export const markTurnZero: MarkTurnZero = (tZero) => {
  if (tZero[0]["label"] != "gametype") {
    throw new Error('Turn zero should start with a "gametype" line');
  }

  const gametype = markGametype(tZero);
  const players = markPlayers(tZero);
  const pokes = markPokes(tZero);
  const gen = markGen(tZero);
  const tier = markTier(tZero);
  const rules = markRules(tZero);

  return {
    gametype,
    players,
    pokes,
    gen,
    tier,
    rules,
  };
};
