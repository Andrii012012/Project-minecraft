interface IItemMenu {
  name: string;
  path: string;
}

interface IListMenu {
  title: string;
  item: IItemMenu[];
}

export {type IListMenu, type IItemMenu};