interface IExchange {
  server?: string;
  serverId?: string;
  price?: number | number[];
  bonus?: number | number[];
  percent?: number;
  fieldMonay?: string | number;
  fieldGameMonay?: string | number;
  [key: string]: number | number[] | string | undefined;
}

export { type IExchange };
