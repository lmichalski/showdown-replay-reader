export type Parser<T> = (s: string) => Parsed<T>;

export type Parsed<T> = {
  head: T;
  rest: string;
};

export type Cell = string;

export type Subline = {
  label: string;
  body: Cell[];
};

export type ReplayLine = {
  label: string;
  cells: Cell[];
  sublines: Subline[];
};
