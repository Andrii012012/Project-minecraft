import React from "react";
import "./listMenuUserStyle.css";
import "./listMenuUserMedia.css";
import ListNav from "../../../ui/ListNav/ListNav";

export default function ListMenuUser(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, _) => (
        <ListNav key={item.text} path={item.path} text={item.text} />
      ))}
    </>
  );
}
