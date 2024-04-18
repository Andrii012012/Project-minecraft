interface IDataSend {
  server?: string;
  serverId?: string;
  price?: number | number[];
  [key: string]: string | number | undefined | number[];
}

export {type IDataSend}