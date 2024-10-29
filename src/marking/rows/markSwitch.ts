import { Poke, ReplayLine } from "../../types";
import { readGender } from "../functions/readGender";
import { splitNicknameFromString } from "../functions/splitNicknameFromSwitch";
import { markSublines } from "../sublines/markSublines";

type MarkSwitch = (line: ReplayLine) => {
  player: string;
  action: string;
  poke: Poke;
};

export const markSwitch: MarkSwitch = (line) => {
  if (line["label"] != "switch") {
    throw new Error(`not a switch line, cannot be marked: + ${line}`);
  }

  const { player, pokeNickname } = splitNicknameFromString(line["cells"][0]);
  const { species, gender } = readGender(line["cells"][1]);
  const health = line["cells"][2].split("/");

  if (health.length != 2) {
    throw new Error(`not a switch line, cannot be marked: + ${line}`);
  }

  const sublines = markSublines(line["sublines"]);

  return {
    player: player,
    action: "switch",
    poke: {
      species: species,
      nickname: pokeNickname,
      gender: gender,
      health: parseInt(health[0]),
    },
  };
};
