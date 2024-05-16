import React, { ReactNode } from "react";
import { createContext } from "react";
import { IServer } from "../interface/interface";

const dataServers = createContext<IServer[] | null>(null);

function ContextDataServers(props: {children: ReactNode}): JSX.Element {
  let { children } = props;
  
  const options: IServer[] = [
    { server: "TechnoMagic", server_id: 1 },
    { server: "TechnoMagic", server_id: 2 },
    { server: "TechnoMagic", server_id: 3 },
  ];

  return (
    <dataServers.Provider value={options}>
      {children}
    </dataServers.Provider>
  );
}

export { ContextDataServers, dataServers };
