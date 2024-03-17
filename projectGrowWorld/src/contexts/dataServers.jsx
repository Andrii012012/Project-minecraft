import React from "react";
import { createContext } from "react";

const dataServers = createContext();

function ContextDataServers(props) {
   let {children} = props;
     const options = [
    { server: "TechnoMagic", serverId: 1 },
    { server: "TechnoMagic", serverId: 2 },
    { server: "TechnoMagic", serverId: 3 },
  ];
  return <dataServers.Provider value={[,,options]}>{children}</dataServers.Provider>;
}

export { ContextDataServers, dataServers };
