import promotion from "../assets/images/global/image-monets.png";

interface IPromotions {
  img: string;
  title: string;
  bonus: string;
  percent: string;
}

const PROMOTIONS: IPromotions[] = [
  { img: promotion, title: "1000", bonus: "Бонус в подарок", percent: "15" },
  { img: promotion, title: "2000", bonus: "Бонус в подарок", percent: "25" },
  { img: promotion, title: "3000", bonus: "Бонус в подарок", percent: "35" },
  { img: promotion, title: "5000", bonus: "Бонус в подарок", percent: "45" },
];

export {PROMOTIONS, type IPromotions};
