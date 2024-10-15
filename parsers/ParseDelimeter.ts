export type ParseDelimeter = (d: string) => (s: string) => {
  head: string;
  rest: string;
};
