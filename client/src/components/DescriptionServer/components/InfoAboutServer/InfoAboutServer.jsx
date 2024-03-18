import React from "react";
import "./infoAboutServerStyle.css";
import "./infoAboutServerMedia.css";

export default function InfoAboutServer(props) {
  let { list } = props;
  return (
    <>
      {list.map((item, index) => {
        let { info, aboutInfo } = item;
        return (
          <tr className="about-server__item" key={index}>
            <td className="about-server__item-info about-server__info-item">
              {info}
            </td>
            <td className="about-server__item-about-info about-server__info-item">
              {aboutInfo}
            </td>
          </tr>
        );
      })}
    </>
  );
}
