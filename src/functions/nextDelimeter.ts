type NextDelimeter = (s: string) => "|" | "\n";

export const nextDelimeter: NextDelimeter = (s) => {
  const pipePos = s.indexOf("|");
  const newlinePos = s.indexOf("\n");

  if (pipePos == -1 && newlinePos == -1) {
    throw new Error("No Delimeter found: " + s);
  }

  if (pipePos == -1) {
    return "\n";
  }

  if (newlinePos == -1) {
    return "|";
  }

  if (pipePos < newlinePos) {
    return "|";
  } else {
    return "\n";
  }
};
