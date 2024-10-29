import { Subline } from "../../types";
import { splitNicknameFromString } from "../../functions/splitNicknameFromSwitch";

type MarkDamage = (subline: Subline) => {};

export const markDamage: MarkDamage = (subline) => {
  if (subline["label"] != "-damage") {
    throw new Error(`not a damage subline, cannot be marked: + ${subline}`);
  }

  const { player, pokeNickname } = splitNicknameFromString(subline["cells"][0]);

  let health: string[] = [];
  let source = "";
  let event = "damage";

  if (subline["cells"][1].indexOf("/") != -1) {
    health = subline["cells"][1].split("/");
  }

  if (subline["cells"][1].indexOf("fnt") != -1) {
    event = "fnt";
    health = subline["cells"][1].split(" ");
  }

  if (subline["cells"].length == 3) {
    source = subline["cells"][2];
  }

  if (health.length == 0) {
    throw new Error(`not a damage subline, cannot be marked: + ${subline}`);
  }

  return {
    player: player,
    event: event,
    poke: {
      nickname: pokeNickname,
      health: parseInt(health[0]),
    },
    source: source,
  };
};

// |-damage|p1a: Azelf|1/100
