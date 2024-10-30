import { splitNicknameFromString } from "../../functions/splitNicknameFromSwitch";
import { Subline } from "../../types";

type MarkBoost = (subline: Subline) => {
  player: string;
  event: string;
  affectedPoke: string;
  affectedStat: string;
  statChange: number;
  source: string;
};

export const markBoost: MarkBoost = (sl) => {
  if (sl["label"] != "-boost") {
    throw new Error(`not a boost subline, cannot be marked: + ${sl}`);
  }

  const { player, pokeNickname } = splitNicknameFromString(sl["cells"][0]);
  const event = sl["label"];
  const affectedStat = sl["cells"][1];
  const statChange = sl["cells"][2];

  let source = "";

  if (sl["cells"].length == 4) {
    source = sl["cells"][3];
  }

  return {
    player: player,
    event: event,
    affectedPoke: pokeNickname,
    affectedStat: affectedStat,
    statChange: parseInt(statChange),
    source: source,
  };
};

// |-boost|p2a: Vendetta|atk|2|[from] item: Weakness Policy
// |-boost|p2a: Kill Bill|atk|2
//
// label: boost
// cells: [p2a: Kill Bill, atk, 2]
