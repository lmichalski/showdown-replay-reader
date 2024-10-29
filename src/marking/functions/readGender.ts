import { Poke } from "../../types";

type ReadGender = (poke: string) => {
  species: string;
  gender: string;
};

export const readGender: ReadGender = (s) => {
  const splitString = s.split(", ");

  if (splitString.length != 1 && splitString.length != 2) {
    throw new Error("string cannot be a Pokemon string: " + s);
  }
  if (splitString.length == 1) {
    return {
      species: splitString[0],
      gender: "none",
    };
  }

  return {
    species: splitString[0],
    gender: splitString[1],
  };
};
