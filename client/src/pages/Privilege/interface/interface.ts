interface IStatBuyPrivilege {
  server?: string;
  serverId?: string;
  price?: number | number[];
  privilege?: string;
  discountPrices?: number[];
  duration?: number;
  finalPrice?: number;
  [key: string]: number | number[] | string | undefined;
}

export { type IStatBuyPrivilege };
