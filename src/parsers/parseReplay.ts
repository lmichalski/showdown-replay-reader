import { Parser, Turn } from "../types";
import { parseTurn } from "./parseTurn";

type ParseReplay = Parser<Turn[]>;

export const parseReplay: ParseReplay = (s) => {
  const { head: firstTurn, rest: afterFirstTurn } = parseTurn(s);

  if (afterFirstTurn == "") {
    return {
      head: [firstTurn],
      rest: afterFirstTurn,
    };
  }

  const { head: secondTurn, rest: afterSecondTurn } =
    parseReplay(afterFirstTurn);

  return {
    head: [firstTurn].concat(secondTurn),
    rest: afterSecondTurn,
  };
};
