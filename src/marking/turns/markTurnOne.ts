import { ReplayLine } from "../../types";
import { splitNicknameFromSwitch } from "../functions/splitNicknameFromSwitch";
import { markSwitch } from "../rows/markSwitch";

type MarkTurnOne = (turnOne: ReplayLine[]) => {};

export const markTurnOne: MarkTurnOne = (tOne) => {
  if (tOne[0]["label"] != "start") {
    throw new Error('Turn one should start with a "start" line');
  }

  if (tOne[1]["label"] != "switch") {
    throw new Error('Turn one should contain two "switch" lines');
  }

  if (tOne[2]["label"] != "switch") {
    throw new Error('Turn one should contain two "switch" lines');
  }

  const p1Lead = markSwitch(tOne[1]);
  const p2Lead = markSwitch(tOne[2]);

  return {
    turn: 1,
    p1Lead: p1Lead,
    p2Lead: p2Lead,
  };
};
