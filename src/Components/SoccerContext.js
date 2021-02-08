import React, { Children, createContext, useState } from "react";

export const SoccerContext = createContext();

export const SoccerProvider = (props) => {
  const [soccerData, setSoccerData] = useState({
    scorers: [],
    standings: [],
  });

  return (
    <SoccerContext.Provider value={[soccerData, setSoccerData]}>
      {props.children}
    </SoccerContext.Provider>
  );
};
