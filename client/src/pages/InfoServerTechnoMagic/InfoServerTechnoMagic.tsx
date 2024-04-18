import React from "react";
import styles from './style.module.scss';
import ImageMain from "../../assets/images/servers/TechnoMagic/techno-magic-image-main.png";
import DescriptionServer from "../../components/DescriptionServer/DescriptionServer";
import {
  INFO_SERVER_MAINCRAFT,
  IInfoServerMainCraft,
} from "../../constants/infoServerMainCraft";

export default function InfoServerTechnoMagic(): JSX.Element {
  return (
    <>
      {INFO_SERVER_MAINCRAFT.map((item: IInfoServerMainCraft, index: number) => {
        let [serverName, description, infoServer, infoModes] = item.SERVER;
        return (
          <DescriptionServer
            key={index}
            imageMain={ImageMain}
            server={serverName.serverName}
            description={description.description}
            infoMods={infoModes.infoModes}
            informationServer={infoServer.infoServer}
          />
        );
      })}
    </>
  );
}
