type SplitNicknameFromSwitch = (s: string) => {
  player: string;
  pokeNickname: string;
};

export const splitNicknameFromSwitch: SplitNicknameFromSwitch = (s) => {
  const splitString = s.split(": ");

  if (splitString.length != 1 && splitString.length != 2) {
    throw new Error("string cannot be read as a switch-row pokemon" + s);
  }

  return {
    player: splitString[0].substring(0, 2),
    pokeNickname: splitString[1],
  };
};
