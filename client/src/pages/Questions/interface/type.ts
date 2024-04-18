type TListQuiestion = {
  title: string;
  id: string;
  descriptions: string[];
  questions: string[];
};

type TListPointsnavigator = Record<
  "className" | "pointName" | "image" | "dataTp",
  string
>;

export {type TListPointsnavigator, type TListQuiestion};