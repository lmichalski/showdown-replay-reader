import { splitNicknameFromString } from "../../functions/splitNicknameFromSwitch";
import { Subline } from "../../types";

type MarkSupereffective = (subline: Subline) => {
  player: string;
  affectedPoke: string;
};

export const markSupereffective: MarkSupereffective = (sl) => {
  if (sl["label"] != "-supereffective") {
    throw new Error(`not an supereffective subline, cannot be marked: + ${sl}`);
  }

  const { player, pokeNickname } = splitNicknameFromString(sl["cells"][0]);

  return {
    player: player,
    affectedPoke: pokeNickname,
  };
};

// |-supereffective|p1a: Sylveon
