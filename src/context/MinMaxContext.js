import { createContext, useReducer, useState } from "react";

export const MinMaxContext = createContext();

export const MinMaxContextProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const MinMaxReducer = (state, action) => {
    if (action.type === "Minimize") {
      setOpenSidebar(action.payload);
    }
  };
  const [state, dispatch] = useReducer(MinMaxReducer);
  return (
    <MinMaxContext.Provider value={{ openSidebar, minimize: dispatch }}>
      {children}
    </MinMaxContext.Provider>
  );
};
