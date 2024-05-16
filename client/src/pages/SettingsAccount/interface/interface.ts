interface ISettings {
  skin: object;
  shortDescription: string;
  avatar: object;
  [key: string]: object | string;
}

export { type ISettings };
