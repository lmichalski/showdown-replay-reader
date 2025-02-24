type ReadLevel = (s: string) => number;

export const readLevel: ReadLevel = (s) => {
  if (s.startsWith("L")) {
    const level = Number(s.split("L")[1]);

    if (isNaN(level)) {
      throw new Error(
        "string not valid for converting to level, must be of form 'L#': " + s
      );
    }

    if (level > 100 || level < 1) {
      throw new Error("Level must be between 1 and 100: " + level);
    }

    return level;
  }

  throw new Error(
    "string not valid for converting to level, must be of form 'L#': " + s
  );
};
