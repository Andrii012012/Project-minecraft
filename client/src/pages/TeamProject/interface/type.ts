type TServers = Record<"name" | "id", string | number>;

type TBranchesList = {
  title: string;
  component: () => JSX.Element;
};

export {type TServers, type TBranchesList};