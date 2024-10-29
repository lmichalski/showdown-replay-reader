import { Poke, ReplayLine } from "../../types";
import {
  markGametype,
  markGen,
  markTier,
} from "../rows/markNonduplicateRowLabel";
import { markPlayersAndPokes } from "../rows/markPlayersAndPokes";
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

export const markTurnZero: MarkTurnZero = (tZero) => {
  if (tZero[0]["label"] != "gametype") {
    throw new Error('Turn zero should start with a "gametype" line');
  }

  const gametype = markGametype(tZero);
  const players = markPlayersAndPokes(tZero);
  const gen = markGen(tZero);
  const tier = markTier(tZero);
  const rules = markRules(tZero);

  return {
    gametype,
    players,
    gen,
    tier,
    rules,
  };
};
