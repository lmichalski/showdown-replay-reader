import { Poke, ReplayLine } from "../../types";
import { readGender } from "../functions/readGender";
import { splitNicknameFromSwitch } from "../functions/splitNicknameFromSwitch";

type MarkSwitch = (line: ReplayLine) => {
  player: string;
  action: string;
  poke: Poke;
};

export const markSwitch: MarkSwitch = (line) => {
  if (line["label"] != "switch") {
    throw new Error(`not a switch line, cannot be marked: + ${line}`);
  }

  const { player, pokeNickname } = splitNicknameFromSwitch(line["label"][0]);

  const health = line["cells"][2].split("/");

  const { species, gender } = readGender(line["cells"][1]);

  if (health.length != 2) {
    throw new Error(`not a switch line, cannot be marked: + ${line}`);
  }

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
