import { Turn } from "../types";
import { markGametype } from "./rows/markNonduplicateRowLabel";

export const markGame = (replay: Turn[]) => {
  const [removed, ...newArr] = replay;

  if (
    removed["lines"].length != 2 ||
    removed["lines"][0]["label"] != "j" ||
    removed["lines"][1]["label"] != "j"
  ) {
    throw new Error(
      `pregame Turn does not contain the expected lines:\n${removed["lines"]}`
    );
  }

  const gametype = markGametype(newArr[0]["lines"]);
};
