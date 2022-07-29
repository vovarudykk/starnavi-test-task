import React from "react";

//Context for handle change mode (hover or click)
const ModeContext = React.createContext({
  mode: "hover",
  setMode: () => {},
});

export default ModeContext;
