import { ReplayLine } from "../../types";

type MarkTurnOne = (turnOne: ReplayLine[]) => {};

export const markTurnOne: MarkTurnOne = (tOne) => {
  if (tOne[0]["label"] != "start") {
    throw new Error('Turn one should start with a "start" line');
  }

  return {};
};
