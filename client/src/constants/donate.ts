import privilege1 from "../assets/images/page/Privilege/privilege-image1.jpg";
import privilege2 from "../assets/images/page/Privilege/privilege-image2.png";
import privilege3 from "../assets/images/page/Privilege/privilege-image3.jpg";
import privilege4 from "../assets/images/page/Privilege/privilege-image4.jpg";
import privilege5 from "../assets/images/page/Privilege/privilege-image5.jpg";

interface IPrivileges {
  text: string;
  price: number | number[];
  img: string;
}

interface IDuration {
  duration: number;
  background: string;
}

type TDuration = Array<number>;

const PRIVILEGES: IPrivileges[] = [
  {
    text: "vip",
    price: [120, 230, 380, 630],
    img: privilege1,
  },
  {
    text: "Premium",
    price: [250, 500, 830, 1020],
    img: privilege2,
  },
  {
    text: "Delux",
    price: [350, 650, 930, 1320],
    img: privilege3,
  },
  {
    text: "Extra",
    price: [660, 1250, 1630, 2120],
    img: privilege4,
  },
  {
    text: "Elixir",
    price: [920, 1650, 2530, 3709],
    img: privilege5,
  },
];

const DURATION_PRIVILEGE: IDuration[] = [
  {
    duration: 1,
    background: "rgb(255,160,122)",
  },
  {
    duration: 2,
    background: "rgb(233,150,122)",
  },
  {
    duration: 3,
    background: "rgb(205,92,92)",
  },
  {
    duration: 1e9,
    background: "rgb(165,42,42)",
  },
];

const DISCOUNT: TDuration = [1, 1.15, 1.25, 1.35];

export {
  PRIVILEGES,
  DURATION_PRIVILEGE,
  DISCOUNT,
  type IPrivileges,
  type IDuration,
  type TDuration,
};
