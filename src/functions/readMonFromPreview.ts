import { Poke } from "../types";
import { readGender } from "./readGender";
import { readLevel } from "./readLevel";

type ReadMonFromPreview = (s: string) => {
  species: string;
  gender: string;
  level: number;
};

export const readMonFromPreview: ReadMonFromPreview = (s) => {
  const splitString = s.split(", ");

  const species = splitString[0];
  let gender: "male" | "female" | "none";
  let level: number;

  if (splitString.length == 1) {
    gender = "none";
    level = 100;
  } else if (splitString.length == 2) {
    if (splitString[1].startsWith("L")) {
      gender = "none";
      level = readLevel(splitString[1]);
    } else {
      gender = readGender(splitString[1]);
      level = 100;
    }
  } else if (splitString.length == 3) {
    gender = readGender(splitString[2]);
    level = readLevel(splitString[1]);
  } else {
    throw new Error("string cannot be a Pokemon string: " + s);
  }

  return {
    species: species,
    gender: gender,
    level: level,
  };
};
