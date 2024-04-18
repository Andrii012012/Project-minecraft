import React from "react";
import styles from "./style.module.scss";
import ListNav from "../../../ui/ListNav/ListNav";

type TList = {
  path: string;
  text: string;
};

interface IProps {
  list: TList[];
}

export default function ListMenuUser(props: IProps): JSX.Element {
  let { list } = props;

  return (
    <>
      {list.map((item, _) => (
        <ListNav key={item.text} path={item.path} text={item.text} />
      ))}
    </>
  );
}
