import React from "react";
import "./infoServerTechnoMagicStyle.css";
import ImageMain from "../../assets/images/servers/TechnoMagic/techno-magic-image-main.png";
import DescriptionServer from "../../components/DescriptionServer/DescriptionServer";
import INFO_SERVERS from "../../constants/InfoServersMainCraft";

export default function InfoServerTechnoMagic(props) {
  let {} = props;
  return (
    <>
      {INFO_SERVERS.map((item, index) => {
        let [serverName, description, infoServer, infoModes] = item.SERVER;
        return (
          <DescriptionServer
            key={index}
            imageMain={ImageMain}
            server={serverName.serverName}
            descriptionServer={description}
            infoMods={infoModes.infoModes}
            informationServer={infoServer.infoServer}
          />
        );
      })}
    </>
  );
}
