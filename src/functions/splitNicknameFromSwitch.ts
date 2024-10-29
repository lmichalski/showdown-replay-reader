type SplitNicknameFromSwitch = (s: string) => {
  player: string;
  pokeNickname: string;
};

export const splitNicknameFromString: SplitNicknameFromSwitch = (s) => {
  const splitString = s.split(": ");

  if (![1, 2].includes(splitString.length)) {
    throw new Error("string cannot be read as a switch-row pokemon" + s);
  }

  return {
    player: splitString[0].substring(0, 2),
    pokeNickname: splitString[1],
  };
};

// |switch|p1a: Azelf|Azelf|100/100
