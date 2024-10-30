import { splitNicknameFromString } from "../../functions/splitNicknameFromSwitch";
import { Subline } from "../../types";

type MarkEndItem = (subline: Subline) => {
  player: string;
  affectedPoke: string;
  item: string;
  note: string;
};

export const markEndItem: MarkEndItem = (sl) => {
  if (sl["label"] != "-enditem") {
    throw new Error(`not an enditem subline, cannot be marked: + ${sl}`);
  }

  const { player, pokeNickname } = splitNicknameFromString(sl["cells"][0]);

  const item = sl["cells"][1];

  let note = "";

  if (sl["cells"].length == 3) {
    note = sl["cells"][2];
  }

  return {
    player: player,
    event: "enditem",
    affectedPoke: pokeNickname,
    item: item,
    note: note,
  };
};

// |-enditem|p2a: Vendetta|Weakness Policy
