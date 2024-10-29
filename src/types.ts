export type Parser<T> = (s: string) => Parsed<T>;

export type Parsed<T> = {
  head: T;
  rest: string;
};

export type Cell = string;

export type Subline = {
  label: string;
  cells: Cell[];
};

export type ReplayLine = {
  label: string;
  cells: Cell[];
  sublines: Subline[];
};

export type Turn = { t: string; lines: ReplayLine[] };

export type Poke = {
  species: string;
  gender: string;
};
