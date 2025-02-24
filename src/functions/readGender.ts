type ReadGender = (s: string) => "male" | "female";

export const readGender: ReadGender = (s) => {
  if (s == "M") {
    return "male";
  }

  if (s == "F") {
    return "female";
  }

  throw new Error(
    "String may be a real gender but in this instance we're talking about Pokemon and the only valid inputs are F/M. Input: " +
      s
  );
};
