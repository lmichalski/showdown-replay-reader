import { ReplayLine } from "../../types";
import { readMonFromPreview } from "../../functions/readMonFromPreview";
import { splitNicknameFromString } from "../../functions/splitNicknameFromSwitch";

type MarkPoke = (line: ReplayLine) => {
  player: string;
  poke: {
    species: string;
    nickname: "";
    gender: string;
    health: 100;
  };
};

export const markPoke: MarkPoke = (line: ReplayLine) => {
  const player = line["cells"][0];
  const { species, gender } = readMonFromPreview(line["cells"][1]);

  return {
    player: player,
    poke: {
      species: species,
      nickname: "",
      gender: gender,
      health: 100,
    },
  };
};
