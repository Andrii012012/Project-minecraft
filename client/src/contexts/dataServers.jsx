import React from "react";
import { createContext } from "react";

const dataServers = createContext();

function ContextDataServers(props) {
   let {children} = props;
     const options = [
    { server: "TechnoMagic", server_id: 1 },
    { server: "TechnoMagic", server_id: 2 },
    { server: "TechnoMagic", server_id: 3 },
  ];
  return <dataServers.Provider value={[,,options]}>{children}</dataServers.Provider>;
}

export { ContextDataServers, dataServers };
