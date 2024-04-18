interface IStatePrice {
  field?: string;
  percent?: number;
  bonus?: number | number[];
  [key: string]: number | number[] | string | undefined;
}

export { type IStatePrice };
