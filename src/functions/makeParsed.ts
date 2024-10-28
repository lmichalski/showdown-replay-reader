type MakeParsed = <T>(
  head: T,
  rest: string
) => {
  head: T;
  rest: string;
};

export const makeParsed: MakeParsed = (head, rest) => ({
  head: head,
  rest: rest,
});
