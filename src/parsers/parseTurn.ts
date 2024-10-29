import { makeParsed } from "../functions/makeParsed";
import { Parser, Turn } from "../types";
import { parseTurnBody } from "./parseTurnBody";
import { parseTurnHead } from "./parseTurnHead";

type ParseTurn = Parser<Turn>;

export const parseTurn: ParseTurn = (s) => {
  const { head: TurnHead, rest: afterHead } = parseTurnHead(s);

  const { head: TurnBody, rest: afterBody } = parseTurnBody(afterHead);

  return makeParsed(
    {
      turn: parseInt(TurnHead),
      lines: TurnBody,
    },
    afterBody
  );
};
